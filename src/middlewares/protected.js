const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const { bearer } = req.headers
  jwt.verify(bearer, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      console.log(err)
      return res.status(404).send(err)
    }
    next()
  })
}
