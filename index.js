const express = require('express');
const app = express()
const PORT = 8000 || process.env.PORT

app.get('/', (req, res) => {
  res.send('surver running successfully')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})