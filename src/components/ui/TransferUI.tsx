import { useNavigate } from "react-router-dom";
import {
  createContext,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useRef,
} from "react";

import Icons from "./Icons";
import backArrow from "../../../public/arrow_back.png";
import backArrowRed from "../../../public/arrow_back_red.png";
import archiveIcon from "../../../public/archive-line.png";
import { searchContext } from "../../context/searchContext";
import { reactChildren } from "../../types/children";
import { useTransactions } from "../../context/transactionsContext";
import { useCurrentUser } from "../../context/currentUser";
import { Transactions } from "../../types/interfaces";
import loanImg from "../../../public/users/loan.png";
import { generateId } from "../../helpers/RandomId";
import { currentDate } from "../../helpers/GetTime";

interface TransferProps {
  inputError: boolean;
  setInputError: Dispatch<SetStateAction<boolean>>;
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
  const { loan } = useCurrentUser();
  const navigate = useNavigate();

  return (
    <div className="fl-btw mg-top1">
      <Icons
        src={backArrowRed}
        classes="img cursor"
        alt="back"
        fn={() => navigate(-1)}
      />
      <h3 className="link__board">
        {loan ? "Request new loan" : "Send money to"}
      </h3>
      <Icons src={archiveIcon} alt="archive" classes="img" />
    </div>
  );
}

function ButtonAndMessage() {
  const { onSend, onLoan, loan, user } = useCurrentUser();
  const { inputValid, sending } = useTransactions();
  const { currentRecepient, setDelay } = useContext(searchContext);

  const navigate = useNavigate();
  const message = useRef<HTMLInputElement>(null);

  function handleSendMoney(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredMessage = message.current!.value;

    const transactionId = generateId();

    const sendingObject: Transactions = {
      type: loan ? "sending" : "receiving",
      amount: loan ? sending : -sending,
      sendTo: loan ? user!.name : currentRecepient!.name,
      id: transactionId,
      img: loan ? loanImg : currentRecepient!.avatar,
      message: enteredMessage,
      date: currentDate,
    };

    const receivingObj: Transactions = {
      type: "receiving",
      amount: sending,
      sendTo: user!.name,
      id: transactionId,
      img: user!.avatar,
      message: enteredMessage,
      date: currentDate,
    };

    if (loan) {
      onLoan(sendingObject);
    } else {
      onSend(sendingObject);
      currentRecepient?.transactions.push(receivingObj);
    }

    setDelay(180);
    navigate("/home");
  }

  return (
    <form
      typeof="submit"
      className="nav__sendTo-bottom fl-col mg-minus brd-top"
      onSubmit={handleSendMoney}
    >
      <input
        type="text"
        placeholder="comment..."
        ref={message}
        maxLength={50}
      />
      <button
        className={
          inputValid ? `${loan ? "positive__bg" : "negative__bg"}` : ""
        }
        disabled={!inputValid}
      >
        {loan ? "send request" : "send money"}
      </button>
    </form>
  );
}

TransferUI.Input = Input;
TransferUI.SendTo = SendTo;
TransferUI.ButtonAndMessage = ButtonAndMessage;

export default TransferUI;
