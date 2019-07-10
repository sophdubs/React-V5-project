import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

//This modal does not trap focus but for better modal, google how to trap focus in a modal
const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }
  //useEffect runs only once because we explicitely stated no dependencies by adding the empty brackets at the end.
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
