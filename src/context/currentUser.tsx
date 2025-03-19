import { createContext, useContext } from "react";

import { reactChildren } from "../types/children";
import { UserData } from "../types/interfaces";
import user1Avatar from "../../public/users/user_1.png";
import user2Avatar from "../../public/users/user_2.png";
import user3Avatar from "../../public/users/user_3.png";
import depo from "../../public/users/depo.png";
import loan from "../../public/users/loan.png";

interface CurrentUserProps {
  user?: UserData;
  updatedBalance: number;
  firstName: string;
}

const currentUserContext = createContext<CurrentUserProps>(
  {} as CurrentUserProps
);

export function CurrentUser({ children }: reactChildren) {
  const user = {
    name: "Jerald Hitrow",
    email: "test@test.com",
    avatar: user1Avatar,
    transactions: [
      {
        type: "",
        amount: -5000,
        sendTo: "Kate Cooper",
        id: "1002",
        img: user2Avatar,
        date: "today",
      },
      {
        type: "",
        amount: -1000,
        sendTo: "Michael Rogers",
        id: "1003",
        img: user3Avatar,
        date: "31/01/2025",
      },
      {
        type: "deposit",
        amount: 10000,
        sendTo: "",
        id: "1100",
        img: depo,
        date: "15/01/2025",
      },
      {
        type: "loan",
        amount: 10000,
        sendTo: "",
        id: "1200",
        img: loan,
        date: "10/01/2025",
      },
    ],
    balance: 18500,
    id: "1001",
  };

  const firstName = user?.name.split(" ")[0];

  const updatedBalance =
    user?.transactions
      ?.map((el) => el.amount)
      .reduce((acc, curr) => acc + curr) + user.balance;

  return (
    <currentUserContext.Provider value={{ user, updatedBalance, firstName }}>
      {children}
    </currentUserContext.Provider>
  );
}

export function useCurrentUser() {
  const context = useContext(currentUserContext);
  return context;
}
