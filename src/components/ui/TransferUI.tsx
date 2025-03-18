import Icons from "./Icons";
import backArrow from "../../../public/arrow_back.png";
import archiveIcon from "../../../public/archive-line.png";
import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { searchContext } from "../../context/searchContext";

// interface TransferUIProps {
//   onSearch: (text: string) => void;
// }

export default function TransferUI() {
  const { setSearchQuery } = useContext(searchContext);

  const navigate = useNavigate();
  const searchInput = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    const enteredInput = searchInput.current!.value;

    setSearchQuery(enteredInput);
  }

  return (
    <>
      <div className="fl-btw mg-top1">
        <Icons
          src={backArrow}
          alt="back"
          classes="img cursor"
          fn={() => navigate(-1)}
        />
        <h3>Send money</h3>
        <Icons src={archiveIcon} alt="archive" classes="img" />
      </div>
      <input
        className="nav__input"
        type="text"
        placeholder="send to..."
        ref={searchInput}
        onChange={handleSubmit}
      />
    </>
  );
}
