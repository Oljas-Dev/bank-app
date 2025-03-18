import { Outlet } from "react-router-dom";

import LogOutTimer from "./LogOutTimer";

export default function Container() {
  return (
    <article className="container">
      <main className="main">
        <Outlet />
        <LogOutTimer />
      </main>
    </article>
  );
}
