console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
//This tells express to log via morgan
//and morgan to log in the "combined" pre-defined format
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) 
//allow any host or client to access it

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    })
})

app.listen(process.env.PORT || 8081)