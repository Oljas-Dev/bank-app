import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="no-page">
      <h1>404</h1>
      <p>
        Page not found <Link to="/">return to login Page</Link>
      </p>
    </div>
  );
}
