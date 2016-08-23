const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')

const port = 3000

const app = express()
console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('node_modules'))
app.use(bodyParser.json())

app.get('/users', (req, res) => {
  res.send({
    users: [
      {name: "Brian"},
      {name: "Ted"},
      {name: "Monkey"},
      {name: "Mat"},
      {name: "Banana"},
      {name: "Cup"},
    ]
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
