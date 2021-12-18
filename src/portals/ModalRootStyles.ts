import { createGlobalStyle, css } from "styled-components";

type ModalRootStylesProps = {
  isModalOpen: boolean;
};
const isModalOpenModalRootStyles = ({ isModalOpen }: ModalRootStylesProps) =>
  isModalOpen
    ? css`
        transform: translateX(0vw);
      `
    : css`
        transform: translateX(80vw);
      `;

export const ModalRootStyles = createGlobalStyle`
  #modal_root {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80vw;

    transition: transform 0.2s ease-in-out;
    ${isModalOpenModalRootStyles}
  }
`;

console.log(ModalRootStyles);
