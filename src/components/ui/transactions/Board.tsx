// import { useState } from "react";
import { useCurrentUser } from "../../../context/currentUser";
import Modal from "../Modal";
import Details from "./Details";

export default function TransactionsBoard() {
  // const [sorting, setSorting] = useState(false);
  const { user } = useCurrentUser();

  return (
    <Modal.Window
      windowName="Transactions"
      btnName="check all"
      classes="info__module grid"
    >
      {user!.transactions!.length === 0 ? (
        <p>There are no transactions to show</p>
      ) : (
        user?.transactions
          ?.map((t) => (
            <Details
              key={t.id}
              img={{ src: t.img, alt: t.sendTo }}
              date={t.date}
              sum={t.amount}
              message={t.message}
            />
          ))
          .reverse()
      )}
      <div className="txt-right cursor">SORT ⬇️</div>
    </Modal.Window>
  );
}
