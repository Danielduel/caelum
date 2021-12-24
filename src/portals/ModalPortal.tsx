import React from "react";
import ReactDOM from "react-dom";
import { MODAL_NAME } from "../common/constants";
import { WithChildren } from "../common/helpers";
import { useAppContextModal } from "../hooks/useAppContextModal";

const _modalRoot = document.getElementById("modal_root") as HTMLDivElement;
if (!_modalRoot) {
  console.error("Modal root is missing");
  throw "Modal root is missing";
}
const modalRoot = _modalRoot || document.createElement("div"); // fallback, shouldn't happen
// const emptyModal = document.createElement("div");

type ModalPortalProps = WithChildren & {
  modalName: MODAL_NAME;
};
const ModalPortal = ({ modalName, children }: ModalPortalProps) => {
  const { _actualOpenModalName } = useAppContextModal();
  const element = React.useMemo(() => document.createElement("div"), []);
  const removeElementFromModalRoot = () => {
    const isChildOfModalRoot = modalRoot.contains(element);
    if (isChildOfModalRoot) {
      console.log(`Remove ${modalName}`);
      modalRoot.removeChild(element);
    }
  };

  React.useLayoutEffect(() => {
    // I am not sure how it will affect updates, lets keep that around for now
    if (_actualOpenModalName === modalName) {
      console.log(`Push ${modalName}`);
      modalRoot.appendChild(element);
    } else {
      removeElementFromModalRoot();
    }

    return () => {
      // cleanup
      removeElementFromModalRoot();
    };
  }, [_actualOpenModalName]);

  return ReactDOM.createPortal(children, element, modalName);
};

export { ModalPortal };
