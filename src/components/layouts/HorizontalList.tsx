import styled from "styled-components";
import { removeScrollbars } from "../../common/removeScrollbars";

const boxShadowSize = "0.125rem";

const HorizontalList = styled.div`
  grid-auto-columns: 6rem;
  display: grid;
  max-width: 100vw;
  overflow-x: scroll;
  box-sizing: border-box;
  padding-bottom: ${boxShadowSize};
  ${removeScrollbars}
`;

const HorizontalListItem = styled.div`
  grid-column: span 1;
  grid-row: 1;
  box-shadow: ${boxShadowSize} ${boxShadowSize} #ccc;
`;

export { HorizontalList, HorizontalListItem };
