const CSVToJSON = require('csvtojson')


;(async () => {
  try {
    const users = await CSVToJSON().fromFile('./lines/line2.csv')

    // log the JSON array
    console.log(users)
  } catch (err) {
    console.log(err)
  }
})()