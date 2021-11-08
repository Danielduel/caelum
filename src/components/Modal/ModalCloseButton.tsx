import styled from "styled-components";
import { CloseIcon } from "../Icon/Icons";
import { IconButton } from "../Icon/IconButton";

export const ModalCloseButton = styled(CloseIcon)`
  top: 0;
  right: 0;
  ${IconButton}
`;

export const ModalCloseButtonWithOffset = styled(ModalCloseButton)`
  top: 1rem;
  right: 1rem;
`;
