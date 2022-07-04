// let rates1 = 0;
// let rates2 = 0;

async function money() {
  try {
    let res = await fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=da4271feedaee6fd99dd5da81b77d53b"
    );
    let moneys = await res.json();
    // return res.data.rates;
    console.log(moneys);
    const currency1 = "USD"; // с данной валюты конвертируем
    const currency2 = "EUR"; // на вот эту валюту
    rates1 = moneys.rates[currency1];
    console.log(rates1);
    rates2 = moneys.rates[currency2];
    console.log(rates2);
  } catch (error) {}
}

async function awaitTo() {
  const amount = 40; // вот такую сумму
  console.log("вот результат конверсии");
  console.log(Math.round((amount / rates1) * rates2));
}

async function go() {
  await money();
  await awaitTo();
}
go();
