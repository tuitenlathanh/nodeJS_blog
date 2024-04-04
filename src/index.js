const morgan = require('morgan')
const express = require('express')
const app = express()
const port = 3000

//logger
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`init app listening on port ${port}`)
})