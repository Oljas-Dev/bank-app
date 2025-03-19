import { useParams } from "react-router-dom";
import { useContext } from "react";

import { searchContext } from "../../context/searchContext";
import Transaction from "../ui/transactions/TransactionsModal";

type ParamsProps = {
  userId: string;
};

export default function SendToForm() {
  const { searchedUsers } = useContext(searchContext);

  const { userId } = useParams<ParamsProps>();

  const user = searchedUsers.find((user) => userId === user.id);

  return <Transaction.Sending user={user} />;
}
