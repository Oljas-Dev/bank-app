interface CurrenciesType {
  symbol: string;
  currencyName: string;
  currPrices: string;
}

export default function SingleCurrency({
  symbol,
  currencyName,
  currPrices,
}: CurrenciesType) {
  return (
    <>
      <div className="avatar info__currency-icon fl-col txt-big">{symbol}</div>
      <div className="fl-col">
        <p>{currencyName}</p>
        <p>{currPrices}</p>
      </div>
    </>
  );
}
