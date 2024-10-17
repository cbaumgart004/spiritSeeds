const { User, Product, Category, Order, Appointment } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

// Helper function for handling order population
const populateOrders = async (userId) => {
  return User.findById(userId).populate({
    path: 'orders.products',
    populate: 'category',
  })
}

// Helper function to create Stripe line items
const createLineItems = (products, url) => {
  return products.map((product) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: product.name,
        description: product.description,
        images: [`${url}/images/${product.image}`],
      },
      unit_amount: product.price * 100,
    },
    quantity: product.purchaseQuantity,
  }))
}

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find()
    },
    products: async (parent, { category, categoryName }) => {
      const params = {}
      if (category) params.category = category
      if (categoryName) params.categoryName = { $regex: categoryName }

      return await Product.find(params).populate('category')
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category')
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await populateOrders(context.user._id)
        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate)
        return user
      }
      throw new AuthenticationError('Not authenticated')
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await populateOrders(context.user._id)
        return user.orders.id(_id)
      }
      throw new AuthenticationError('Not authenticated')
    },
    checkout: async (parent, { products }, context) => {
      const url = new URL(context.headers.referer).origin
      await Order.create({ products: products.map(({ _id }) => _id) })

      const line_items = createLineItems(products, url)

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      })

      return { session: session.id }
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)
      const token = signToken(user)
      return { token, user }
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products })
        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        })
        return order
      }
      throw new AuthenticationError('Not authenticated')
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        })
      }
      throw new AuthenticationError('Not authenticated')
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1
      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      )
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })
      if (!user) throw new AuthenticationError('Invalid credentials')

      const correctPw = await user.isCorrectPassword(password)
      if (!correctPw) throw new AuthenticationError('Invalid credentials')

      const token = signToken(user)
      return { token, user }
    },
    createCategory: async (parent, { categoryName }, context) => {
      if (context.user && context.user.isAdmin) {
        return await Category.create({ categoryName })
      }
      throw new AuthenticationError('Not authorized')
    },
    createAppointment: async (parent, { input }) => {
      return await Appointment.create(input)
    },
  },
}

module.exports = resolvers
