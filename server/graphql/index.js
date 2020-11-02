const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./types')
const resolvers = require('./resolvers')
const { User, Session } = require('../db/models')

const validateGraphQlSession = async req => {
  const dev = process.env.NODE_ENV === 'development'
  const { graphql } = req.headers
  if (graphql && dev) {
    try {
      const { data } = await Session.findByPk(graphql)
      const { user } = JSON.parse(data).passport
      req.user = await User.findByPk(user)
    } catch (err) {
      console.log(err)
      console.log('<<< BAD SESSION >>>')
    }
  }
  return req
}

const context = ({ req }) => validateGraphQlSession(req) 

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})
