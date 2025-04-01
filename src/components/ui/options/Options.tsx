import OptionsIcon from "./OptionsIcon";
import creditCard from "../../../../public/credit_card.png";
import requestLoan from "../../../../public/bank.png";
import deleteAccount from "../../../../public/delete.png";
import { useCurrentUser } from "../../../context/currentUser";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { searchContext } from "../../../context/searchContext";

export default function Options() {
  const [path, setPath] = useState("");
  const { setLoan } = useCurrentUser();
  const { balance } = useContext(searchContext);

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
    if (balance! <= 0) {
      setPath("#");
    } else {
      setPath("/newtransaction");
    }
  }, [balance]);

  function handlePath() {
    if (balance! <= 0) {
      toast.error("Insufficient money to proceed, try to request loan");
    } else {
      setPath("/newtransaction");
      setLoan(false);
    }
  }

  function handleLoan() {
    setLoan(true);
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
        fn={handleLoan}
      />
      <OptionsIcon
        imgObj={iconsData.deleteAcc.image}
        info={iconsData.deleteAcc.info}
        path="#"
      />
    </section>
  );
}
