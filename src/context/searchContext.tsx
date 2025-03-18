import { createContext, Dispatch, JSX, SetStateAction, useState } from "react";
import { reactChildren } from "../types/children";
import { users } from "../tempUserObjects/UserObjects";
import { UserData } from "../types/interfaces";

interface ContextProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchedUsers: UserData[];
}

export const searchContext = createContext<ContextProps>({} as ContextProps);

export function SearchUserProvider({ children }: reactChildren): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");

  const searchedUsers =
    searchQuery.length > 0
      ? users.filter((user) =>
          user.name?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : users;

  return (
    <searchContext.Provider
      value={{ searchQuery, setSearchQuery, searchedUsers }}
    >
      {children}
    </searchContext.Provider>
  );
}
