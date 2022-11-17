require('dotenv').config({path: '../.env'})
const io = require('socket.io')(process.env.COORDINATE_PROVIDER_PORT)

const getCoords = io.on('connection', (socket) =>{
    console.log("connection set")
    socket.on('send-coords', (coord1, coord2, coord3) => {
        console.log(coord1, coord2, coord3)
    })
})()


module.exports = getCoords()