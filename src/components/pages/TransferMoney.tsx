import { useContext } from "react";

import { users } from "../../tempUserObjects/UserObjects";
import Modal from "../ui/Modal";
import ModalsContainer from "../ui/ModalsContainer";
import Nav from "../ui/Nav";
import UsersBoard from "../ui/UsersBoard";
import { searchContext } from "../../context/searchContext";
import { UserData } from "../../types/interfaces";

export default function TransferMoney() {
  const { searchedUsers } = useContext(searchContext);

  return (
    <>
      <Nav>
        <Nav.Transfer />
      </Nav>
      <ModalsContainer>
        <Modal.Window
          windowName="Favourite"
          classes="info__module grid mg-top12"
        >
          <UsersBoard obj={users[5]} link={true} />
        </Modal.Window>

        <Modal.Window windowName="Contacts" classes="info__module grid">
          {searchedUsers.map((user: UserData) => (
            <UsersBoard key={user.id} obj={user} link={true} />
          ))}
        </Modal.Window>
      </ModalsContainer>
    </>
  );
}
