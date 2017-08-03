const express = require('express')
const exphbs = require('express-handlebars')
const words = require('an-array-of-english-words')
require('dotenv').config()

const app = express()
const PORT = 3000

function generateFourRandomWords () {
  let randomWords = []
  const dictSize = words.length
  for (let i = 0; i++; i < 4) {
    let randomIndex = Math.floor(Math.random() * dictSize)
    randomWords.push(words[randomIndex])
  }
  return randomWords
}

// App config
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Serve static files from ./assets
app.use(express.static('assets'))

// Top level route
app.get('/', async (request, response) => {
  const words = generateFourRandomWords()
  response.render('view', {message: words})
})

// Server listener
app.listen(PORT, (err) => {
  if (err) {
    return console.log('Something bad happened', err)
  }
  console.log(`server is listening on ${PORT}`)
})
