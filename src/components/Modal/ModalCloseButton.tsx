import styled from "styled-components";
import { CloseIcon } from "../Icon/Icons";

export const ModalCloseButton = styled(CloseIcon)`
  top: 0;
  right: 0;
  position: absolute;
  cursor: pointer;
  opacity: 0.8;
  width: 2em;
  height: 2em;
`;

export const ModalCloseButtonWithOffset = styled(ModalCloseButton)`
  top: 1rem;
  right: 1rem;
`;
