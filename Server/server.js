require("dotenv").config({ path: "../.env" });
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.listen(process.env.COORDINATE_PROVIDER_PORT, () => {
//     console.log("connection established")
//     io.on('connection', (socket) =>{
//         console.log("connection set")
//         socket.on('send-coords', (coord1, coord2, coord3) => {
//             console.log(coord1, coord2, coord3)
//         })
//     })
// })

io.on("connection", (socket) => {
  try {
    console.log("connection established");
    socket.on("send-coords", (coord1, coord2, coord3) => {
      console.log(`${coord1}, ${coord2}, ${coord3}`);
    });
  } catch (err) {
    console.log(err);
  }
});

httpServer.listen(process.env.COORDINATE_PROVIDER_PORT);
