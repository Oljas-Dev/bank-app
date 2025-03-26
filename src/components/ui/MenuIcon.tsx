import { useState } from "react";

import icon from "../../../public/menu_icon.png";
import Menu from "./Menu";
import Icons from "./Icons";

export default function MenuIcon() {
  const [open, setOpen] = useState(false);

  function onClose() {
    setOpen((open) => !open);
  }

  return (
    <span className="menu cursor" onClick={onClose}>
      <Icons classes="menu__img" src={icon} alt="menu icon" />
      {open && <Menu />}
    </span>
  );
}
