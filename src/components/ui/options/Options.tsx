import OptionsIcon from "./OptionsIcon";
import creditCard from "../../../../public/credit_card.png";
import requestLoan from "../../../../public/bank.png";
import deleteAccount from "../../../../public/delete.png";
import { useCurrentUser } from "../../../context/currentUser";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function Options() {
  const [path, setPath] = useState("");
  const { balance } = useCurrentUser();

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

  useEffect(() => {
    if (balance <= 0) {
      setPath("#");
    } else {
      setPath("/newtransaction");
    }
  }, [balance]);

  function handlePath() {
    if (balance <= 0) {
      toast.error("Insufficient money to proceed, try to request loan");
      console.log(path);
    } else {
      setPath("/newtransaction");
      console.log(path);
    }
  }
  return (
    <section className="options fl-btw">
      <OptionsIcon
        imgObj={iconsData.transfer.image}
        info={iconsData.transfer.info}
        path={path}
        fn={handlePath}
      />
      <OptionsIcon
        imgObj={iconsData.requestLoan.image}
        info={iconsData.requestLoan.info}
        path="/newloan"
      />
      <OptionsIcon
        imgObj={iconsData.deleteAcc.image}
        info={iconsData.deleteAcc.info}
        path="#"
      />
    </section>
  );
}
