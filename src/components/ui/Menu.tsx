import { Link } from "react-router-dom";

import { useContext } from "react";
import { searchContext } from "../../context/searchContext";

export default function Menu() {
  const { handleCleanCurrent } = useContext(searchContext);

  return (
    <div className="menu__dropdown">
      <ul>
        <Link to="/" onClick={handleCleanCurrent}>
          <li>Change account</li>
        </Link>
        {/* <li>Logout</li> */}
      </ul>
    </div>
  );
}
