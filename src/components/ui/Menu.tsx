import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu__dropdown">
      <ul>
        <li>
          <Link to="/">Change account</Link>
        </li>
        {/* <li>Logout</li> */}
      </ul>
    </div>
  );
}
