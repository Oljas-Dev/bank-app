import CurrenciesInfo from "./CurrenciesInfo";
import SingleCurrency from "./SingleCurrency";

export default function CurrencyContainer() {
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
