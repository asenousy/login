const request = require('request')

module.exports = (req, res) => {
  request('https://www.googleapis.com/books/v1/volumes?q=isbn', (error, response, list) => {
    if (error) {
      console.log(error)
      return res.json({ error })
    }
    res.json({
      error: null,
      list: JSON.parse(list)
    })
  })
}
