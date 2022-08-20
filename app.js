// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// routes setting
app.get('/', (req, res) => {
  res.send('Hello')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})