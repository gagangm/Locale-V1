const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//Middleware
app.use(bodyParser.json())
app.use(cors())

const rides = require('./routes/api/rides.js')

app.use('/api/rides', rides)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))

