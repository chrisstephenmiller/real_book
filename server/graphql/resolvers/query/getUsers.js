const { User } = require('../../../db/models')

module.exports = (parent, args, req) => User.findAll()
