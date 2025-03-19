import { createContext, useState } from "react";

import { reactChildren } from "../../types/children";
import MenuIcon from "./MenuIcon";
import UserAvatar from "./UserAvatarAndGreet";
import TransferUI from "./TransferUI";
import UsersBoard from "./UsersBoard";
import { SendingProps } from "../../types/interfaces";

// interface NavContextProps {
//   form: boolean;
//   handleForm: () => void;
// }

const NavContext = createContext<object | null>(null);

function Nav({ children }: reactChildren) {
  const [form, setForm] = useState(true);

  function handleForm() {
    setForm(true);
  }

  return (
    <NavContext.Provider value={{ form, handleForm }}>
      {children}
    </NavContext.Provider>
  );
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
      <TransferUI.Input />
    </nav>
  );
}

function TransferTo({ user }: SendingProps) {
  return (
    <nav className="nav__sendTo brd-bottom mg-minus">
      <TransferUI.SendTo />
      <UsersBoard obj={user} link={false} />
    </nav>
  );
}

Nav.Main = Main;
Nav.Transfer = Transfer;
Nav.TransferTo = TransferTo;

export default Nav;
