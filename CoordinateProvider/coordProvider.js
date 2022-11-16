const fsPromises = require('fs').promises
const fs = require('fs')
const path = require('path')





// const readFile = async () =>{
//     try{
//         const data = await fsPromises.readFile(path.join(__dirname, 'lines', 'line.csv'), 'utf-8')
//         console.log(data)
//     }
//     catch(err){
//         console.error(err)
//     }
// }





// const readStream = fs.createReadStream('./lines/line2.csv', {encoding: 'utf-8'})

// readStream.on('data', (dataChunk) =>{

// })

// fs.readFile(path.join(__dirname, 'lines', 'line1.csv'), (err, data) =>{
//     if (err) throw err
//     console.log(data.toString())
// })




process.on('uncaughtException', err =>{
    console.error("Unexpected error, now shutting down")
    process.exit(1)
})