import { createContext, type ReactNode } from "react";
import { reactChildren } from "../../types/children";

type CompoundContext = object;
interface WindowsProps {
  windowName: string;
  btnName?: string;
  classes: string;
  children?: ReactNode;
}

const ModalContext = createContext<CompoundContext | null>(null);

function Modal({ children }: reactChildren) {
  return <ModalContext.Provider value={null}>{children}</ModalContext.Provider>;
}

function Window({ windowName, btnName, classes, children }: WindowsProps) {
  return (
    <article className={classes}>
      <div className="fl-btw">
        <h4>{windowName}</h4>
        {btnName && <button className="btn__sec">{btnName}</button>}
      </div>
      {children}
    </article>
  );
}

Modal.Window = Window;
export default Modal;
