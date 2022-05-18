import { useEffect, useRef, FunctionComponent, MutableRefObject, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IProps {
  children: ReactNode
}

const Modal: FunctionComponent<IProps> = ({ children }) => {
  const modalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!modalRef.current) {
    modalRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    // defensive programming
    if (!modalRoot || !modalRef.current) {
      return;
    }
    modalRoot.appendChild(modalRef.current);
    return () => {
      if (modalRef.current) {
        modalRoot.removeChild(modalRef.current);
      }
    }
  }, []);

  return createPortal(<div className="modal">{children}</div>, modalRef.current);
};

export default Modal;
