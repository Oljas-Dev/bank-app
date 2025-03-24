import { createContext, Dispatch, JSX, SetStateAction, useState } from "react";
import { reactChildren } from "../types/children";
import { users } from "../tempUserObjects/UserObjects";
import { UserData } from "../types/interfaces";

type undefinedString = string | undefined;

interface ContextProps {
  user: UserData;
  setUser: Dispatch<SetStateAction<UserData>>;
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
  const [user, setUser] = useState({});
  const [currentId, setCurrentId] = useState<undefinedString>("");
  const [balance, setBalance] = useState();

  const searchedUsers =
    searchQuery.length > 0
      ? users.filter((user) =>
          user.name?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : users;

  console.log(users);

  const currentRecepient = users.find((user) => user.id === currentId);

  function handleBalance(user: UserData) {
    const balanceCalc =
      user?.transactions
        .map((el) => el.amount)
        .reduce((acc, curr) => acc + curr, 0) || 0;

    setBalance(balanceCalc);
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
