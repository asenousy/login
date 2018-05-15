const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const { bearer } = req.headers
  jwt.verify(bearer, process.env.JWT_SECRET, function (error, decoded) {
    if (error) {
      console.log(error)
      return res.json({ error })
    }
    next()
  })
}
