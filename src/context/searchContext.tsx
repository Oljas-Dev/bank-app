import { createContext, Dispatch, JSX, SetStateAction, useState } from "react";
import { reactChildren } from "../types/children";
import { users } from "../tempUserObjects/UserObjects";
import { UserData } from "../types/interfaces";

type undefinedString = string | undefined;

interface ContextProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchedUsers: UserData[];
  currentId: undefinedString;
  setCurrentId: Dispatch<SetStateAction<undefinedString>>;
  currentRecepient: UserData | undefined;
}

export const searchContext = createContext<ContextProps>({} as ContextProps);

export function SearchUserProvider({ children }: reactChildren): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentId, setCurrentId] = useState<undefinedString>("");

  const searchedUsers =
    searchQuery.length > 0
      ? users.filter((user) =>
          user.name?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : users;

  const currentRecepient = users.find((user) => user.id === currentId);

  return (
    <searchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchedUsers,
        currentId,
        setCurrentId,
        currentRecepient,
      }}
    >
      {children}
    </searchContext.Provider>
  );
}
