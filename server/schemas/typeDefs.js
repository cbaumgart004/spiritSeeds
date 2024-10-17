const typeDefs = `
  type Category {
    _id: ID
    categoryName: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Appointment {
   serviceType: String!
   date: String!
   time: String!
   user: String!
}
   input AppointmentInput {
    serviceType: String!
    date: String!
    time: String!}


  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input ProductInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }

  

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    appointments: [Appointment]
    appointment(_id: ID!): Appointment
    checkout(products: [ProductInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    createCategory(categoryName: String!): Category

    deleteCategory(categoryId: String!): Category

    createAppointment(input: AppointmentInput!): Appointment
    deleteAppointment(_id: ID!): Appointment

  }
`;

module.exports = typeDefs;
