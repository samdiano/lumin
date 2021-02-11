import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// style
import "./CartNav.css";

interface IProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IProps) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    elRef.current && modalRoot?.appendChild(elRef.current);

    return () => {
      elRef.current && modalRoot?.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div className="modal">{children}</div>, elRef.current);
};

export default Modal;
