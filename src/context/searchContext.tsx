import { createContext, Dispatch, JSX, SetStateAction, useState } from "react";
import { reactChildren } from "../types/children";
import { users } from "../tempUserObjects/UserObjects";
import { dataTest } from "../types/interfaces";

type undefinedString = string | undefined;

interface ContextProps {
  user: dataTest;
  setUser: Dispatch<SetStateAction<dataTest>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchedUsers: dataTest[];
  currentId: undefinedString;
  setCurrentId: Dispatch<SetStateAction<undefinedString>>;
  currentRecepient: dataTest | undefined;
  handleBalance: (user: dataTest) => void;
  balance: number | undefined;
}

export const searchContext = createContext<ContextProps>({} as ContextProps);

export function SearchUserProvider({ children }: reactChildren): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState({});
  const [currentId, setCurrentId] = useState<undefinedString>("");
  const [balance, setBalance] = useState();

  const searchedUsers =
    searchQuery.length > 0
      ? users.filter(
          (user) =>
            typeof user.name === "string" &&
            user.name?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : users;

  const currentRecepient = users.find((user) => user.id === currentId);
  // const user = JSON.parse(localStorage.getItem("user"));

  function handleBalance(user: dataTest) {
    if (typeof user === "object") {
      const balanceCalc =
        user.transactions
          .map((el: object) => el.amount)
          .reduce((acc: number, curr: number) => acc + curr, 0) || 0;

      setBalance(balanceCalc);
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
