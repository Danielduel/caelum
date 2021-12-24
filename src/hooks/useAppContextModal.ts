import React from "react";
import AppContext from "../AppContext";

const useAppContextModal = () => {
  const { modal } = React.useContext(AppContext);
  return modal;
};

export { useAppContextModal };
