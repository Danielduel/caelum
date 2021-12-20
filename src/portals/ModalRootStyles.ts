import { createGlobalStyle, css } from "styled-components";

type ModalRootStylesProps = {
  isModalOpen: boolean;
};
const isModalOpenModalRootStyles = ({ isModalOpen }: ModalRootStylesProps) =>
  isModalOpen
    ? css`
        right: 0;
      `
    : css`
        right: -80vw;
      `;

export const ModalRootStyles = createGlobalStyle`
  #modal_root {
    position: fixed;
    top: 0;
    bottom: 0;
    right: -80vw;
    width: 80vw;
    background-color: rgba(255, 255, 255, 0.7);

    transition: right 0.2s ease-in-out;
    ${isModalOpenModalRootStyles}
  }
`;

console.log(ModalRootStyles);
