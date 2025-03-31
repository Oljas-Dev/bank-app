import { Link } from "react-router-dom";
import { users } from "../../tempUserObjects/UserObjects";

export default function Menu() {
  function handleCleanCurrent() {
    const currentUser = users.find((user) => user.current === true);
    currentUser!.current = false;

    localStorage.setItem("user", JSON.stringify(users));
  }

  return (
    <div className="menu__dropdown">
      <ul>
        <li>
          <Link to="/" onClick={handleCleanCurrent}>
            Change account
          </Link>
        </li>
        {/* <li>Logout</li> */}
      </ul>
    </div>
  );
}
