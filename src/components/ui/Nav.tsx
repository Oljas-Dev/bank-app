import { createContext } from "react";

import { reactChildren } from "../../types/children";
import MenuIcon from "./MenuIcon";
import UserAvatar from "./UserAvatarAndGreet";
import TransferUI from "./TransferUI";

const NavContext = createContext<object | null>(null);

function Nav({ children }: reactChildren) {
  return <NavContext.Provider value={null}>{children}</NavContext.Provider>;
}

function Main() {
  return (
    <nav className="nav fl-btw">
      <UserAvatar />
      <MenuIcon />
    </nav>
  );
}

function Transfer() {
  return (
    <nav className="nav">
      <TransferUI />
    </nav>
  );
}

Nav.Main = Main;
Nav.Transfer = Transfer;

export default Nav;
