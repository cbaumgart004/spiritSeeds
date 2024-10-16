import { gql } from "@apollo/client";

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($categoryId: String!) {
    deleteCategory(categoryId: $categoryId) {
      categoryName
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation createCategory($categoryName: String!) {
    createCategory(categoryName: $categoryName) {
      categoryName
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_SERVICE = gql`
  mutation CreateAppointment($serviceType: String!, $date: String!, $time: String) {
  createAppointment(serviceType: $serviceType, date: $date, time: $time) {
    _id
    serviceType
    date
    time
  }
}
  `;


