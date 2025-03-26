import { FormEvent, useContext, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { searchContext } from "../../context/searchContext";
import { users } from "../../tempUserObjects/UserObjects";

export default function LoginPage() {
  const { setUser, handleBalance } = useContext(searchContext);
  const navigate = useNavigate();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredEmail = email.current!.value;
    const enteredPassword = password.current!.value;

    const checkUser = users.find((user) => user.email === enteredEmail);

    if (!checkUser || checkUser.password !== enteredPassword) {
      toast.error("Sorry, but there is no match!");
      return;
    } else {
      setUser(checkUser);
      handleBalance(checkUser);
      // localStorage.setItem("user", JSON.stringify(checkUser));
    }

    navigate("/home");
  }

  // const checkStorage = localStorage.getItem("user");

  // console.log(checkStorage);

  return (
    <div className="screen-80 flex login">
      <form
        typeof="submit"
        className="fl-col txt-center"
        onSubmit={handleSubmit}
      >
        <h2>Please login in the app</h2>
        <input
          type="text"
          placeholder="user email"
          className="login__input"
          ref={email}
        />
        <input
          type="password"
          placeholder="password"
          className="login__input"
          ref={password}
        />
        <button>login</button>
      </form>
    </div>
  );
}
