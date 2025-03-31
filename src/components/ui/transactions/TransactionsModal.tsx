import { createContext, useState } from "react";
import { reactChildren } from "../../../types/children";
import Nav from "../Nav";
import { SendingProps } from "../../../types/interfaces";
import TransferUI from "../TransferUI";
import MoneyInput from "./MoneyInput";

interface TransactionsProps {
  type: string;
  handleType: (str: string) => void;
}

const TransactionsContext = createContext<TransactionsProps>(
  {} as TransactionsProps
);

function Transaction({ children }: reactChildren) {
  const [type, setType] = useState("");

  function handleType(str: string) {
    setType(str);
  }

  return (
    <TransactionsContext.Provider value={{ type, handleType }}>
      {children}
    </TransactionsContext.Provider>
  );
}

function Sending({ user }: SendingProps) {
  return (
    <section className="send-form">
      <Nav.TransferTo user={user} />
      <MoneyInput />
      <TransferUI.ButtonAndMessage />
    </section>
  );
}

function Requesting() {}

Transaction.Sending = Sending;
Transaction.Requesting = Requesting;

export default Transaction;
