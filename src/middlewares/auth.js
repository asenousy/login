const jwt = require('jsonwebtoken')
const users = require('../users.json')

module.exports = (req, res) => {
  const { email, password } = req.body
  const user = users.find(user => user.email === email && user.password === password)

  if (!user) {
    return void res.json({error: 'invalid creds'})
  }

  const { fullName, zip } = user
  const token = jwt.sign({ fullName, zip, email }, process.env.JWT_SECRET, { expiresIn: 60 * 60 })
  res.json({error: null, token})
}
