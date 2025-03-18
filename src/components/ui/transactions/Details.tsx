import { ImageData } from "../../../types/interfaces";

interface Transactions {
  img: ImageData;
  date: string;
  sum: number;
}

export default function TransactionsDetails({ img, date, sum }: Transactions) {
  return (
    <div className="transaction fl-btw">
      <img className={`avatar ${sum > 0 ? "positive" : "negative"}`} {...img} />
      <span className="info__sec">{date}</span>
      <span className="grow txt-right">{sum}</span>
    </div>
  );
}
