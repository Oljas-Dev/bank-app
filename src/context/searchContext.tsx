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
  storedUsers: dataTest | null;
}

export const searchContext = createContext<ContextProps>({} as ContextProps);

export function SearchUserProvider({ children }: reactChildren): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(function () {
    const allUsers = localStorage.getItem("user");

    const parsedUsers = JSON.parse(allUsers!);
    const user = parsedUsers.find((user: dataTest) => user!.current === true);
    return user;
  });

  const [currentId, setCurrentId] = useState<undefinedString>("");
  const [balance, setBalance] = useState(function () {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUsers = JSON.parse(user);
      const currentUser = parsedUsers.find(
        (user: dataTest) => user!.current === true
      );

      const balanceCalc =
        currentUser?.transactions
          ?.map((el: dataTest) => el.amount)
          .reduce((acc: number, curr: number) => acc + curr, 0) || 0;
      return balanceCalc;
    }
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

  const userExists = localStorage.getItem("user");
  const storedUsers = JSON.parse(userExists!);

  function handleBalance(user: dataTest) {
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
        storedUsers,
      }}
    >
      {children}
    </searchContext.Provider>
  );
}
