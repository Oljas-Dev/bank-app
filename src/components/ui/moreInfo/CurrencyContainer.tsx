import { useQuery } from "@tanstack/react-query";
import CurrenciesInfo from "./CurrenciesInfo";
import SingleCurrency from "./SingleCurrency";

export default function CurrencyContainer() {
  const {
    data: eurRates,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["?source=EUR"],
  });

  if (isLoading) return <div>🔃</div>;
  if (error) return <div>Error loading items</div>;

  const usdRate = eurRates?.rates!.USD.toFixed(2);
  const gbpRate = eurRates?.rates!.GBP.toFixed(2);
  const usdBuy = (Number(eurRates?.rates!.USD) + 0.1).toFixed(2);
  const gbpBuy = (Number(eurRates?.rates!.GBP) + 0.1).toFixed(2);

  return (
    <div className="info__currency fl-btw">
      <CurrenciesInfo>
        <SingleCurrency
          symbol="$"
          currencyName="US Dollar"
          currPrices={`${usdRate} / ${usdBuy}`}
        />
      </CurrenciesInfo>
      <CurrenciesInfo>
        <SingleCurrency
          symbol="£"
          currencyName="GB Pound"
          currPrices={`${gbpRate} / ${gbpBuy}`}
        />
      </CurrenciesInfo>
    </div>
  );
}
