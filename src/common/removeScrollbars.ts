import { css } from "styled-components";

const removeScrollbars = css`
  /* Just handle that for webkits for now */
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export { removeScrollbars };
