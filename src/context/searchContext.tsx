import { createContext, Dispatch, JSX, SetStateAction, useState } from "react";
import { reactChildren } from "../types/children";
import { users } from "../tempUserObjects/UserObjects";
import { Transactions, UserData } from "../types/interfaces";

type undefinedString = string | undefined;

interface ContextProps {
  user: UserData | undefined;
  setUser: Dispatch<SetStateAction<UserData | undefined>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchedUsers: UserData[];
  currentId: undefinedString;
  setCurrentId: Dispatch<SetStateAction<undefinedString>>;
  currentRecepient: UserData | undefined;
  handleBalance: (user: UserData) => void;
  balance: number | undefined;
}

export const searchContext = createContext<ContextProps>({} as ContextProps);

export function SearchUserProvider({ children }: reactChildren): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(function () {
    const allUsers = localStorage.getItem("user");

    const parsedUsers = JSON.parse(allUsers!);
    const user = parsedUsers?.find((user: UserData) => user!.current === true);
    return user;
  });

  const [currentId, setCurrentId] = useState<undefinedString>("");
  const [balance, setBalance] = useState(function () {
    const balanceCalc =
      user?.transactions
        ?.map((el: Transactions) => el.amount)
        .reduce((acc: number, curr: number) => acc + curr, 0) || 0;
    return balanceCalc;
  });

  const searchedUsers =
    searchQuery.length > 0
      ? users.filter(
          (user) =>
            typeof user.name === "string" &&
            user.name?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : users;

  const currentRecepient = users.find((user) => user.id === currentId);

  function handleBalance(user: UserData) {
    if (user.transactions instanceof Array) {
      const balanceCalc =
        user
          .transactions!.map((el) => el.amount)
          .reduce((acc: number, curr: number) => acc + curr, 0) || 0;

      localStorage.setItem("user", JSON.stringify(users));
      setBalance(balanceCalc);
    } else {
      setBalance(0);
    }
  }

  return (
    <searchContext.Provider
      value={{
        user,
        setUser,
        searchQuery,
        setSearchQuery,
        searchedUsers,
        currentId,
        setCurrentId,
        currentRecepient,
        handleBalance,
        balance,
      }}
    >
      {children}
    </searchContext.Provider>
  );
}
