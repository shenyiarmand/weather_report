const express = require('express')
const app = express()
const port = 3000
const token = 'af3fad2886c1aefec144f6d9388b8e2eb8c202ae'

app.get('/', (req, res) => {
  res.send("HOLA")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})