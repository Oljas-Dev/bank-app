import icon from "../../../public/menu_icon.png";
import Icons from "./Icons";

export default function MenuIcon() {
  return (
    <span className="menu cursor">
      <Icons classes="menu__img" src={icon} alt="menu icon" />
      <MenuIcon />
    </span>
  );
}
