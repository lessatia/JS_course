const axios = require("axios");
let rates1 = 0;
let rates2 = 0;

const currency1 = "USD"; // с данной валюты конвертируем
const amount = 40; // вот такую сумму
const currency2 = "EUR"; // на вот эту валюту

function awaitTo() {
  console.log("вот результат конверсии:");
  console.log(Math.round((amount / rates1) * rates2) + " " + currency2);
}
axios
  .get(
    "http://api.exchangeratesapi.io/v1/latest?access_key=da4271feedaee6fd99dd5da81b77d53b"
  )
  .then(function (req) {
    // console.log(req.data.rates);  // курсы всех валют
    rates1 = req.data.rates[currency1]; // курс первой валюты
    rates2 = req.data.rates[currency2]; // курс второй валюты

    awaitTo();
  })
  .catch(function (error) {
    // handle error
    console.log(error, "error");
  });
