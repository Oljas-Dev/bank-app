import { ImageData } from "../../../types/interfaces";

export default function AccountRemainder() {
  const imagePlus: ImageData = {
    src: "/public/plus_btn.png",
    alt: "fill account button",
  };
  return (
    <div className="acc__state mg-top14">
      <button className="btn btn__plus">
        <img {...imagePlus} />
      </button>
      <h2>10 250,75 $</h2>
    </div>
  );
}
