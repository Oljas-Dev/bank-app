import { ImageData } from "../../types/interfaces";

export default function Icons({ src, alt, classes, fn }: ImageData) {
  return <img className={classes} src={src} alt={alt} onClick={fn} />;
}
