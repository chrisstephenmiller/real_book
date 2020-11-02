const { User } = require('../../../db/models')

module.exports = async (parent, { name, email }, { user: { id } }) => {
  const [userId, [user]] = await User.update({ name, email }, { where: { id }, returning: true })
  return user
}
