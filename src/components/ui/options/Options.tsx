import OptionsIcon from "./OptionsIcon";
import creditCard from "../../../../public/credit_card.png";
import requestLoan from "../../../../public/bank.png";
import deleteAccount from "../../../../public/delete.png";

export default function Options() {
  const iconsData = {
    transfer: {
      image: {
        src: creditCard,
        alt: "transfer money",
      },
      info: "transfer money",
    },
    requestLoan: {
      image: {
        src: requestLoan,
        alt: "request loan",
      },
      info: "request loan",
    },
    deleteAcc: {
      image: {
        src: deleteAccount,
        alt: "delete account",
      },
      info: "delete account",
    },
  };
  return (
    <section className="options fl-btw">
      <OptionsIcon
        imgObj={iconsData.transfer.image}
        info={iconsData.transfer.info}
        path="/newtransaction"
      />
      <OptionsIcon
        imgObj={iconsData.requestLoan.image}
        info={iconsData.requestLoan.info}
        path="#"
      />
      <OptionsIcon
        imgObj={iconsData.deleteAcc.image}
        info={iconsData.deleteAcc.info}
        path="#"
      />
    </section>
  );
}
