import { ImageData } from "../../../types/interfaces";

interface Transactions {
  img?: ImageData;
  date?: string;
  sum?: number;
  message: string;
}

export default function TransactionsDetails({
  img,
  date,
  sum,
  message,
}: Transactions) {
  return (
    <div className="transaction fl-btw">
      <img
        className={`avatar ${sum! > 0 ? "positive" : "negative"}`}
        {...img}
      />
      <div>
        <div className="info__sec">{date}</div>
        {message.length > 0 && <div className="info__sec">{message}</div>}
      </div>
      <span className="grow txt-right">{sum}</span>
    </div>
  );
}
