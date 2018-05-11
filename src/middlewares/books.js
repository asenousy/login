const request = require('request')

module.exports = (req, res) => {
  request('https://www.googleapis.com/books/v1/volumes?q=isbn', (err, response, list) => {
    if (err) {
      console.log(err)
      return res.status(404).send(err)
    }
    res.json(JSON.parse(list))
  })
}
