import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { reactChildren } from "../types/children";
import { Movements } from "../types/interfaces";
// import user1Avatar from "../../public/users/user_1.png";
import { searchContext } from "./searchContext";
// import user2Avatar from "../../public/users/user_2.png";
// import user3Avatar from "../../public/users/user_3.png";
// import depo from "../../public/users/depo.png";
// import loanImg from "../../public/users/loan.png";

// type userProps = UserData | null;

interface CurrentUserProps {
  updatedBalance: Movements[];
  firstName: string;
  onSend: (obj: Movements) => void;
  onLoan: (obj: Movements) => void;
  balance: number;
  loan: boolean;
  setLoan: Dispatch<SetStateAction<boolean>>;
}

const currentUserContext = createContext<CurrentUserProps>(
  {} as CurrentUserProps
);

export function CurrentUser({ children }: reactChildren) {
  const [updatedBalance, setUpdatedBalance] = useState([{}]);
  const [loan, setLoan] = useState(false);

  const { user } = useContext(searchContext);

  if (!user) return alert("Please login first");

  // const user: userProps = {
  //   name: "Jerald Hitrow",
  //   email: "jerald@test.com",
  //   avatar: user1Avatar,
  //   transactions: updatedBalance,
  //   id: "1001",
  //   password: "1111",
  // };

  const firstName = user?.name.split(" ")[0];

  let balance;

  if (updatedBalance.length > 0) {
    balance = user.transactions
      .map((el) => el.amount)
      .reduce((acc, curr) => acc + curr, 0);
  } else {
    balance = 0;
  }

  function onSend(obj: Movements) {
    setUpdatedBalance((prevArr) => prevArr.concat(obj));
  }

  function onLoan(obj: Movements) {
    setUpdatedBalance((prevArr) => prevArr.concat(obj));
  }

  return (
    <currentUserContext.Provider
      value={{
        user,
        updatedBalance,
        firstName,
        onSend,
        onLoan,
        balance,
        loan,
        setLoan,
      }}
    >
      {children}
    </currentUserContext.Provider>
  );
}

export function useCurrentUser() {
  const context = useContext(currentUserContext);

  if (context === undefined) {
    throw new Error("Current user Context is used outside the Context");
  }

  return context;
}
