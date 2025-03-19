import { useCurrentUser } from "../../../context/currentUser";
import { ImageData } from "../../../types/interfaces";
import plusImage from "../../../../public/plus_btn.png";

export default function AccountRemainder() {
  const { updatedBalance } = useCurrentUser();

  const imagePlus: ImageData = {
    src: plusImage,
    alt: "fill account button",
  };

  return (
    <div className="acc__state mg-top14">
      <button className="btn btn__plus">
        <img {...imagePlus} />
      </button>
      <h2>{updatedBalance} €</h2>
    </div>
  );
}
