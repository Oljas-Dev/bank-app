import { reactChildren } from "../../types/children";

export default function ModalsContainer({ children }: reactChildren) {
  return <section className="info grid">{children}</section>;
}
