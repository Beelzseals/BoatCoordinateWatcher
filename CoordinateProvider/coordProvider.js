const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'lines', 'line1.csv'), (err, data) =>{
    if (err) throw err
    console.log(data.toString())
})


process.on('uncaughtException', err =>{
    console.error("Unexpected error, now shutting down")
    process.exit(1)
})