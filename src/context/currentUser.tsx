import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { reactChildren } from "../types/children";
import { Movements, UserData } from "../types/interfaces";
import user1Avatar from "../../public/users/user_1.png";
import { searchContext } from "./searchContext";

interface CurrentUserProps {
  user: UserData;
  firstName: string;
  onSend: (obj: Movements) => void;
  onLoan: (obj: Movements) => void;
  loan: boolean;
  setLoan: Dispatch<SetStateAction<boolean>>;
}

const currentUserContext = createContext<CurrentUserProps>(
  {} as CurrentUserProps
);

export function CurrentUser({ children }: reactChildren) {
  const { user: currentUser, handleBalance } = useContext(searchContext);
  const [loan, setLoan] = useState(false);

  const user: UserData = currentUser || {
    name: "Jerald Hitrow",
    email: "jerald@test.com",
    avatar: user1Avatar,
    transactions: [],
    id: "1001",
    password: "1111",
  };

  const firstName = user?.name.split(" ")[0];

  function onSend(obj: Movements) {
    user.transactions.push(obj);
    handleBalance(user);
  }

  function onLoan(obj: Movements) {
    user.transactions.push(obj);
    handleBalance(user);
  }

  return (
    <currentUserContext.Provider
      value={{
        user,
        firstName,
        onSend,
        onLoan,
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
