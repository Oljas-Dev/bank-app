import { useContext, useEffect, useState } from "react";
import { useCurrentUser } from "../../../context/currentUser";
import { useTransactions } from "../../../context/transactionsContext";
import { searchContext } from "../../../context/searchContext";
import toast from "react-hot-toast";

export default function MoneyInput() {
  const [newBalance, setNewBalance] = useState(0);
  const { balance } = useContext(searchContext);
  const { loan } = useCurrentUser();
  const { inputError, setInputError, setInputValid, setSending } =
    useTransactions();

  function handleChange(e: number) {
    if (e <= 0) {
      setInputValid(false);
      setNewBalance(balance!);
      setSending(0);
    } else if (e > balance!) {
      setInputValid(false);
      setNewBalance(balance!);
      setSending(0);
      toast.error("Insufficient balance to proceed!");
    } else {
      setInputValid(true);
      setNewBalance(loan ? balance! + e : balance! - e);
      setSending(e);
    }
  }

  useEffect(() => {
    if (newBalance < 0) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  }, [newBalance, setInputError]);

  return (
    <div className="money-input mg-minus">
      <label htmlFor="amount" className={inputError ? "negative__text" : ""}>
        {inputError
          ? "Insufficient money to proceed"
          : `Balance left ${newBalance > 0 ? newBalance : balance} €`}
      </label>
      <input
        id="amount"
        type="number"
        placeholder="0"
        // ref={input}
        onChange={(e) => handleChange(Number(e.target.value))}
      />
    </div>
  );
}
