const CSVToJSON = require("csvtojson");
require("dotenv").config({ path: "../.env" });
const { io } = require("socket.io-client");

const BOAT1PATH = "./lines/line1.csv";
const BOAT2PATH = "./lines/line2.csv";
const BOAT3PATH = "./lines/line3.csv";

(async () => {
  try {
    const firstBoat = await convertCSVToJSON(BOAT1PATH, "first");
    const secondBoat = await convertCSVToJSON(BOAT2PATH, "second");
    const thirdBoat = await convertCSVToJSON(BOAT3PATH, "third");
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

async function  convertCSVToJSON(path, boat) {
   await CSVToJSON()
    .fromFile(path)
    .then((jsonObj) => {
      console.log(`${boat} done`);
      return jsonObj;
    });
}
