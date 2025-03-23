import { useParams } from "react-router-dom";
import { useContext } from "react";

import { searchContext } from "../../context/searchContext";
import Transaction from "../ui/transactions/TransactionsModal";
import { useCurrentUser } from "../../context/currentUser";

type ParamsProps = {
  userId: string;
};

export default function SendToForm() {
  const { searchedUsers } = useContext(searchContext);
  const { user: currentUser, loan } = useCurrentUser();

  const { userId } = useParams<ParamsProps>();

  const user = searchedUsers.find((user) => userId === user.id);

  if (loan) return <Transaction.Sending user={currentUser} />;

  return <Transaction.Sending user={user} />;
}
