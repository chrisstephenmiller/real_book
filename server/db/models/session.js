const Sequelize = require('sequelize')
const db = require('../db')

const Session = db.define('session', {
  sid: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  expires: {
    type: Sequelize.DATE
  },
  data: {
    type: Sequelize.TEXT
  }
})

module.exports = Session
