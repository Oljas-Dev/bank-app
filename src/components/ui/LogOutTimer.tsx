import { useContext, useEffect } from "react";

import { searchContext } from "../../context/searchContext";

export default function LogOutTimer() {
  const { timeleft, setTimeleft } = useContext(searchContext);
  // const timer = useRef(10);
  const minutes = Math.floor(timeleft / 60);
  const seconds = Math.floor(timeleft % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeleft(timeleft - 1); // Decrease the time left by 1 second
      console.log(timeleft); // Log the time left to the console

      if (timeleft === 0) {
        localStorage.removeItem("user"); // Remove user data from local storage
        window.location.href = "/"; // Redirect to the home page
        clearTimeout(timer);
      }
      // return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, 1000);
  }, [timeleft, setTimeleft]); // Run the effect when timeleft changes

  return (
    <div className="timer txt-right">
      You will be logged out in{" "}
      <strong>
        {timeleft > 60 ? `${minutes} : ${seconds}` : `${seconds}`}
      </strong>
    </div>
  );
}

// const timer = setTimeout(() => {
//   localStorage.removeItem("user");
//   window.location.href = "/";
// }, 10000); // 10 seconds

// console.log(timer);
