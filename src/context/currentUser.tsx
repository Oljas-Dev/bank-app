import { createContext, useContext, useState } from "react";

import { reactChildren } from "../types/children";
import { Movements, UserData } from "../types/interfaces";
import user1Avatar from "../../public/users/user_1.png";
// import user2Avatar from "../../public/users/user_2.png";
// import user3Avatar from "../../public/users/user_3.png";
// import depo from "../../public/users/depo.png";
import loan from "../../public/users/loan.png";

interface CurrentUserProps {
  user?: UserData;
  updatedBalance: Movements[];
  firstName: string;
  onSend: (obj: Movements) => void;
  onLoan: (obj: Movements) => void;
  balance: number;
}

const currentUserContext = createContext<CurrentUserProps>(
  {} as CurrentUserProps
);

export function CurrentUser({ children }: reactChildren) {
  const [updatedBalance, setUpdatedBalance] = useState([
    {
      type: "receiving",
      amount: 10000,
      sendTo: "",
      id: "1200",
      img: loan,
      message: "",
      date: "10/01/2025",
    },
  ]);

  const user = {
    name: "Jerald Hitrow",
    email: "test@test.com",
    avatar: user1Avatar,
    transactions: updatedBalance,
    id: "1001",
  };

  const firstName = user?.name.split(" ")[0];

  let balance;

  if (updatedBalance.length > 0) {
    balance = user?.transactions
      ?.map((el) => el.amount)
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
      value={{ user, updatedBalance, firstName, onSend, onLoan, balance }}
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

// [
// {
//   type: "sending",
//   amount: -5000,
//   sendTo: "Kate Cooper",
//   id: "1002",
//   img: user2Avatar,
//   message: "",
//   date: "today",
// },
// {
//   type: "sending",
//   amount: -1000,
//   sendTo: "Michael Rogers",
//   id: "1003",
//   img: user3Avatar,
//   message: "",
//   date: "31/01/2025",
// },
// {
//   type: "receiving",
//   amount: 10000,
//   sendTo: "",
//   id: "1100",
//   img: depo,
//   message: "",
//   date: "15/01/2025",
// },
// {
//   type: "receiving",
//   amount: 10000,
//   sendTo: "",
//   id: "1200",
//   img: loan,
//   message: "",
//   date: "10/01/2025",
// },
// ],
