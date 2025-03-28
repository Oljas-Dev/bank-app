import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { reactChildren } from "../types/children";
import { dataTest } from "../types/interfaces";
import user1Avatar from "../../public/users/user_1.png";
import { searchContext } from "./searchContext";

interface CurrentUserProps {
  user: dataTest;
  firstName: string | boolean;
  onSend: (obj: dataTest) => void;
  onLoan: (obj: dataTest) => void;
  loan: boolean;
  setLoan: Dispatch<SetStateAction<boolean>>;
}

const currentUserContext = createContext<CurrentUserProps>(
  {} as CurrentUserProps
);

export function CurrentUser({ children }: reactChildren) {
  const { user: currentUser, handleBalance } = useContext(searchContext);
  const [loan, setLoan] = useState(false);

  const user: dataTest = currentUser || {
    name: "Jerald Hitrow",
    email: "jerald@test.com",
    avatar: user1Avatar,
    transactions: [],
    id: "1001",
    password: "1111",
  };

  const firstName = typeof user.name === "string" && user?.name.split(" ")[0];

  function onSend(obj: dataTest) {
    if (Array.isArray(user.transactions)) {
      user.transactions.push(obj);
      handleBalance(user);
    }
  }

  function onLoan(obj: dataTest) {
    if (Array.isArray(user.transactions)) {
      user.transactions.push(obj);
      handleBalance(user);
    }
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
