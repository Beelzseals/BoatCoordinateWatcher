const CSVToJSON = require("csvtojson");
require("dotenv").config({ path: "../.env" });
const { io } = require("socket.io-client");
const path = require("path");

const BOAT1PATH = "./lines/line1.csv";
const BOAT2PATH = "./lines/line2.csv";
const BOAT3PATH = "./lines/line3.csv";

(() => {
  try {
    const firstBoat = CSVToJSON()
      .fromFile(BOAT1PATH)
      .then((jsonObj) => console.log("first done"));
    const secondBoat = CSVToJSON()
      .fromFile(BOAT2PATH)
      .then((jsonObj) => console.log("second done"));
    const thirdBoat = CSVToJSON()
      .fromFile(BOAT3PATH)
      .then((jsonObj) => console.log("third done"));
      console.log(firstBoat)
    const socket = io(
      `http://localhost:${process.env.COORDINATE_PROVIDER_PORT}`
    );

    socket.on("connect", () => {
      socket.emit("send-coords", firstBoat, secondBoat, thirdBoat);
    });
  } catch (err) {
    console.log(err);
  }
})();
