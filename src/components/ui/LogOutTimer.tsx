import { useContext, useEffect } from "react";
import { searchContext } from "../../context/searchContext";

// import { searchContext } from "../../context/searchContext";

export default function LogOutTimer() {
  const { delay, setDelay } = useContext(searchContext);
  // const [delay, setDelay] = useState(180);

  const minutes = String(Math.trunc(delay / 60)).padStart(2, "0");
  const seconds = String(delay % 60).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay <= 0) {
      clearInterval(timer);
      // localStorage.removeItem("user");
      window.location.href = "/";
    }

    return () => {
      clearInterval(timer);
    };
  }, [delay, setDelay]);

  return (
    <div className="timer txt-right">
      You will be logged out in <strong>{`${minutes} : ${seconds}`}</strong>
    </div>
  );
}

// const timer = setTimeout(() => {
//   localStorage.removeItem("user");
//   window.location.href = "/";
// }, 10000); // 10 seconds

// console.log(timer);
