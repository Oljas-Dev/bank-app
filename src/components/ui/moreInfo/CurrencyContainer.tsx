import CurrenciesInfo from "./CurrenciesInfo";
import SingleCurrency from "./SingleCurrency";

export default function CurrencyContainer() {
  // async function getUSD() {
  //   const response = await fetch(
  //     "https://v1.apiplugin.io/v1/currency/LiSRxweZ/rates?source=EUR",
  //     {
  //       method: "get",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => data)
  //     .catch((error) => console.error("Error fetching currencies:", error));

  //   currencies(response);
  //   return currencies;
  // }

  // let rates;

  // const data = function () {
  //   let test;
  //   rates = test;

  //   return function (data: string[]) {
  //     rates = data.rates;
  //     // console.log(rates.USD);

  //     return rates;
  //   };
  // };

  // const currencies = data();

  // const usd = rates?.USD;

  // console.log(usd);
  // getUSD();

  return (
    <div className="info__currency fl-btw">
      <CurrenciesInfo>
        <SingleCurrency
          symbol="$"
          currencyName="US Dollar"
          currPrices="1.31 / 1.33"
        />
      </CurrenciesInfo>
      <CurrenciesInfo>
        <SingleCurrency
          symbol="£"
          currencyName="GB Pound"
          currPrices="1.35 / 1.37"
        />
      </CurrenciesInfo>
    </div>
  );
}
