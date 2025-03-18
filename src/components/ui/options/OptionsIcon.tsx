import { Link } from "react-router-dom";

import { ImageData } from "../../../types/interfaces";

interface Options {
  imgObj: ImageData;
  info: string;
  path: string;
  fn?: () => void;
}

export default function OptionsIcon({ imgObj, info, path, fn }: Options) {
  return (
    <Link to={path} className="icon link">
      <button className="btn__acc" onClick={fn}>
        <img {...imgObj} />
      </button>
      <span>{info}</span>
    </Link>
  );
}
