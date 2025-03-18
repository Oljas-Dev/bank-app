import user1Foto from "../../../public/users/user_1.png";
import Icons from "./Icons";

export default function UserAvatar() {
  return (
    <div className="user">
      <Icons src={user1Foto} alt="user avatar" classes="avatar" />
      <p className="user__name">Hey, Jerald</p>
    </div>
  );
}
