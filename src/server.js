require('dotenv').config()
const express = require( 'express')
const bodyParser = require('body-parser')
const path = require('path')
const auth = require('./middlewares/auth')
const books = require('./middlewares/books')
const protected = require('./middlewares/protected')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/auth', auth)

app.get('/books',protected, books)

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname + '/../public/index.html')))

if (require.main === module) {
    app.listen(port, () => console.log('Listening on port ' + port))
  } else {
    module.exports = app
  }
