const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    getUsers: [User]
  }

  type Mutation {
    updateUser(name: String, email: String): User
  }

  type User {
    id: Int!
    googleId: String!
    name: String!
    email: String!
  }
`
