require('dotenv').config({path: '../.env'})

const path = require('path')
const express = require('express')
const app = express()


app.get('/', (req, res) =>{
    res.send("Hello World!")
})
console.log(process.env.SERVER_PORT)

app.listen(process.env.SERVER_PORT, () => console.log(`Server running on ${process.env.SERVER_DB}`))