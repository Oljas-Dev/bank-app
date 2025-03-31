import { Link } from "react-router-dom";
import Icons from "./Icons";
import { UserData } from "../../types/interfaces";
import { useContext } from "react";
import { searchContext } from "../../context/searchContext";

type usersObj = {
  obj?: UserData;
  link: boolean;
};

export default function UsersBoard({ obj, link }: usersObj) {
  const { setCurrentId } = useContext(searchContext);

  if (link)
    return (
      <Link
        to={`${obj?.id}`}
        onClick={() => setCurrentId(obj?.id)}
        className="fl-btw link__board cursor"
      >
        <Icons src={obj?.avatar} alt={obj?.name} classes="avatar" />
        <p>{obj?.name}</p>
      </Link>
    );

  return (
    <div className="flex txt-center mg-top1">
      <Icons src={obj?.avatar} alt={obj?.name} classes="avatar" />
      <p className="link__board">{obj?.name}</p>
    </div>
  );
}
