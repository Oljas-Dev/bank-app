export default function MoneyInput() {
  return (
    <div className="money-input mg-minus">
      <label htmlFor="amount">Current balance 10,000 €</label>
      <input id="amount" type="number" placeholder="0" />
    </div>
  );
}
