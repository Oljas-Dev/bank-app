import { useEffect, useState } from "react";
import { useCurrentUser } from "../../../context/currentUser";
import { useTransactions } from "../../../context/transactionsContext";

export default function MoneyInput() {
  const [newBalance, setNewBalance] = useState(0);
  const { balance } = useCurrentUser();
  const { inputError, setInputError, setInputValid, setSending } =
    useTransactions();

  function handleChange(e: number) {
    if (e > 0) {
      setInputValid(true);
      setNewBalance(balance - e);
      setSending(e);
    } else {
      setInputValid(false);
      setNewBalance(balance);
      setSending(0);
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
