import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { reactChildren } from "../types/children";

interface TransactionsProps {
  inputError: boolean;
  setInputError: Dispatch<SetStateAction<boolean>>;
  inputValid: boolean;
  setInputValid: Dispatch<SetStateAction<boolean>>;
  sending: number;
  setSending: Dispatch<SetStateAction<number>>;
}

const TransactionsContext = createContext<TransactionsProps>(
  {} as TransactionsProps
);

export function TransactionsProvider({ children }: reactChildren) {
  const [inputError, setInputError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [sending, setSending] = useState(0);

  return (
    <TransactionsContext.Provider
      value={{
        inputError,
        setInputError,
        inputValid,
        setInputValid,
        sending,
        setSending,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  if (context === undefined) {
    throw new Error("Transaction Context is used outside the Context");
  }

  return context;
}
