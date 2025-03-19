import Icons from "./Icons";
import backArrow from "../../../public/arrow_back.png";
import backArrowRed from "../../../public/arrow_back_red.png";
import archiveIcon from "../../../public/archive-line.png";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { createContext, useContext, useRef } from "react";
import { searchContext } from "../../context/searchContext";
import { reactChildren } from "../../types/children";

interface TransferProps {
  navigate: NavigateFunction;
}

const TransferUIContext = createContext<TransferProps | null>(
  {} as TransferProps
);

function TransferUI({ children }: reactChildren) {
  return (
    <TransferUIContext.Provider value={null}>
      {children}
    </TransferUIContext.Provider>
  );
}

function Input() {
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

function SendTo() {
  const navigate = useNavigate();

  return (
    <div className="fl-btw mg-top1">
      <Icons
        src={backArrowRed}
        classes="img cursor"
        alt="back"
        fn={() => navigate(-1)}
      />
      <h3 className="link__board">Send money to</h3>
      <Icons src={archiveIcon} alt="archive" classes="img" />
    </div>
  );
}

function ButtonAndMessage() {
  return (
    <div className="nav__sendTo-bottom fl-col mg-minus brd-top">
      <input type="text" placeholder="comment..." />
      <button>send money</button>
    </div>
  );
}

TransferUI.Input = Input;
TransferUI.SendTo = SendTo;
TransferUI.ButtonAndMessage = ButtonAndMessage;

export default TransferUI;
