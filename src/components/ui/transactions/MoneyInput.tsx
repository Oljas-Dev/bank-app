import { useState } from "react";
import { useCurrentUser } from "../../../context/currentUser";
import toast from "react-hot-toast";

export default function MoneyInput() {
  const [newBalance, setNewBalance] = useState(0);
  const { updatedBalance } = useCurrentUser();

  function handleChange(e: number) {
    if (newBalance < 0) toast("Not enough money to proceed!");

    setNewBalance(updatedBalance - e);
    console.log(newBalance);
  }

  return (
    <div className="money-input mg-minus">
      <label htmlFor="amount">
        Current balance {newBalance > 0 ? newBalance : updatedBalance} €
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
