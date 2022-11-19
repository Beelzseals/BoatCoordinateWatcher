const CSVToJSON = require("csvtojson");
require("dotenv").config({ path: "../.env" });
const { io } = require("socket.io-client");
const fs = require("fs");

const BOAT1PATH = "./lines/line1.csv";
const BOAT2PATH = "./lines/line2.csv";
const BOAT3PATH = "./lines/line3.csv";

(async () => {
  try {
    convertCSVToJSON(BOAT1PATH, "first", "firstBoat");
    convertCSVToJSON(BOAT2PATH, "second", "secondBoat");
    convertCSVToJSON(BOAT3PATH, "third", "thirdBoat");

    const firstBoat = fs.readFileSync("./exports/firstBoat.json")
    const secondBoat = fs.readFileSync("./exports/secondBoat.json")
    const thirdBoat = fs.readFileSync("./exports/thirdBoat.json")

    const socket = io(
      `http://localhost:${process.env.COORDINATE_PROVIDER_PORT}`
    );

    socket.on("connect", () => {
      socket.emit(
        "send-coords",
        firstBoat,
        secondBoat,
        thirdBoat
      );
    });
  } catch (err) {
    console.log(err);
  }
})();

function convertCSVToJSON(path, boat, fileName) {
  CSVToJSON()
    .fromFile(path)
    .then((jsonObj) => {
      console.log(`${boat} done`);
      fs.writeFileSync(
        `${__dirname}/exports/${fileName}.json`,
        JSON.stringify(jsonObj)
      );
    });
}
