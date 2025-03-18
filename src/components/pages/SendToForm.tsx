import { useParams } from "react-router-dom";
import UsersBoard from "../ui/UsersBoard";
import { useContext } from "react";
import { searchContext } from "../../context/searchContext";

type ParamsProps = {
  userId: string;
};

export default function SendToForm() {
  const { searchedUsers } = useContext(searchContext);

  const { userId } = useParams<ParamsProps>();

  const user = searchedUsers.find((user) => userId === user.id);

  return <UsersBoard obj={user} link={false} />;
}
