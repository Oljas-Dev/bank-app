import { useCurrentUser } from "../../context/currentUser";
import Icons from "./Icons";

export default function UserAvatar() {
  const { user, firstName } = useCurrentUser();

  return (
    <div className="user">
      <Icons src={user?.avatar} alt="user avatar" classes="avatar" />
      <p className="user__name">Hey, {firstName}</p>
    </div>
  );
}
