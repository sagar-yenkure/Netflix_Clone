
const express = require('express')
const connectToMongo=require("./database/connection")
const cors = require('cors')
const port = 5000

connectToMongo();


const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})