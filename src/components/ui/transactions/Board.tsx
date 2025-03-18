import Modal from "../Modal";
import Details from "./Details";
import { user1 } from "../../../tempUserObjects/UserObjects";

export default function TransactionsBoard() {
  const { transactions } = user1;

  return (
    <Modal.Window
      windowName="Transactions"
      btnName="check all"
      classes="info__module grid"
    >
      {transactions.map((t) => (
        <Details
          key={t.userId}
          img={{ src: t.img, alt: t.sentTo }}
          date={t.date}
          sum={t.amount}
        />
      ))}
      <div className="txt-right cursor">SORT ⬇️</div>
    </Modal.Window>
  );
}
