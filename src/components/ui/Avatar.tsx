import Icons from "./Icons";
import { ImageData } from "../../types/interfaces";

export default function Avatar({ src, alt, classes }: ImageData) {
  return <Icons src={src} alt={alt} classes={classes} />;
}
