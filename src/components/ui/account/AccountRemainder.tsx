import { Link } from "react-router-dom";

import { useCurrentUser } from "../../../context/currentUser";
import { ImageData } from "../../../types/interfaces";
import plusImage from "../../../../public/plus_btn.png";
import { useContext } from "react";
import { searchContext } from "../../../context/searchContext";

export default function AccountRemainder() {
  const { balance } = useContext(searchContext);
  const { setLoan } = useCurrentUser();

  const imagePlus: ImageData = {
    src: plusImage,
    alt: "fill account button",
  };

  return (
    <div className="acc__state mg-top14">
      <Link
        to="/newloan"
        className="btn btn__plus"
        onClick={() => setLoan(true)}
      >
        <img {...imagePlus} />
      </Link>
      <h2>{balance} €</h2>
    </div>
  );
}
