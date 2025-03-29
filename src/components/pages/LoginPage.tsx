import { FormEvent, useContext, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { searchContext } from "../../context/searchContext";
import { users } from "../../tempUserObjects/UserObjects";

export default function LoginPage() {
  const { setUser } = useContext(searchContext);
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
      toast.success("Login successful!");
      const newStoredUsers = users.find((user) => user.email === enteredEmail);
      newStoredUsers!.current = true;

      localStorage.setItem("user", JSON.stringify(users));

      // handleBalance(checkUser);

      // if (storedUsers) {
      //   const newUsers: object[] = [];

      //   console.log(storedUsers);
      //   localStorage.setItem(
      //     "user",
      //     JSON.stringify(newUsers.concat(storedUsers, checkUser))
      //   );
      // } else {
      //   localStorage.setItem("user", JSON.stringify([checkUser]));
      // }
    }

    navigate("/home");
  }

  // useEffect(function () {
  //   localStorage.setItem("user", JSON.stringify(users));
  // }, []);

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
