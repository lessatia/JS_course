const someObject = require("./data1.json");
// console.log(someObject);
// console.log(someObject.data[1]);
let ap = 0;
const axios = require("axios");

function awaitTo() {
  const priceListEur = [];
  const priceListUSD = [];
  const convertCourse = ap;
  for (let i = 0; i < someObject.data.length; i++) {
    let priceCard = someObject.data[i];

    let priceCardEur = JSON.parse(JSON.stringify(priceCard));

    priceListEur.push(priceCardEur);
    priceListUSD.push(priceCard);

    priceCardEur.Prices.Price =
      Math.round(priceCardEur.Prices.Price / convertCourse) + " eur";
    priceCardEur.Prices["Retail Price"] =
      Math.round(priceCardEur.Prices["Retail Price"] / convertCourse) + " eur";
    priceCardEur.Prices["Wholesale Price"] =
      Math.round(priceCardEur.Prices["Wholesale Price"] / convertCourse) +
      " eur";

    priceCard.Prices.Currency = " USD";
    priceCardEur.Prices.Currency = " EURO";

    //   console.log(priceCard.Prices);
  }
  console.log(priceListEur);

  const fs = require("fs");

  // convert JSON object to string
  const data11 = JSON.stringify(priceListEur);
  // write JSON string to a file
  fs.writeFile("data11.json", data11, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON EUR data is saved.");
  });

  // convert JSON object to string
  const data12 = JSON.stringify(priceListUSD);
  // write JSON string to a file
  fs.writeFile("data12.json", data12, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON USD data is saved.");
  });
}

axios
  .get(
    "http://api.exchangeratesapi.io/v1/latest?access_key=da4271feedaee6fd99dd5da81b77d53b"
  )
  .then(function (req) {
    // handle success
    // console.log(req.data.rates.USD, "req");
    ap = req.data.rates.USD;
    console.log(ap);
    awaitTo();
  })
  .catch(function (error) {
    // handle error
    console.log(error, "error");
  });
