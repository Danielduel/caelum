import React from "react";
import { MODALS, MODAL_NAME } from "../common/constants";

const useModal = () => {
  const [_actualOpenModalName, _setActualOpenModalName] = React.useState<MODAL_NAME>(MODALS.NONE);
  // useMemo is kinda excessive here, but I prefer to tell react everything how to track that
  const isModalOpen = React.useMemo(() => _actualOpenModalName !== MODALS.NONE, [_actualOpenModalName]);
  const openModal = React.useCallback(
    (modal: MODAL_NAME) => {
      _setActualOpenModalName(modal);
    },
    [_setActualOpenModalName]
  );
  const closeModals = React.useCallback(() => {
    _setActualOpenModalName(MODALS.NONE);
  }, [_setActualOpenModalName]);

  return {
    _actualOpenModalName,
    isModalOpen,
    openModal,
    closeModals
  };
};

export { useModal };
