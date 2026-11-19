const express = require('express');
const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('connected successfully')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})