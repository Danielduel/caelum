import React from "react";
import styled from "styled-components";

const sanitizeNumber = (any: any) => String(Number(any) || 1);
const gridAreaColumn = ({ column, columnSpan }: Pick<GridItemProps, "column" | "columnSpan">) =>
  `grid-column: ${sanitizeNumber(column)} / span ${sanitizeNumber(columnSpan)};`;
const gridAreaRow = ({ row, rowSpan }: Pick<GridItemProps, "row" | "rowSpan">) =>
  `grid-row: ${sanitizeNumber(row)} / span ${sanitizeNumber(rowSpan)};`;

type GridAreaProps = Parameters<typeof gridAreaColumn>[0] & Parameters<typeof gridAreaRow>[0];
const GridArea = styled.div<GridAreaProps>`
  position: relative;
  width: 100%;
  height: 100%;
  ${gridAreaColumn}
  ${gridAreaRow}
`;

type GridItemProps = {
  children?: JSX.Element;

  column?: number;
  row?: number;
  columnSpan?: number;
  rowSpan?: number;
};

const GridItem: React.FunctionComponent<GridItemProps> = ({
  children,
  column,
  columnSpan,
  row,
  rowSpan
}: GridItemProps) => {
  return (
    <GridArea column={column} columnSpan={columnSpan} row={row} rowSpan={rowSpan}>
      {children}
    </GridArea>
  );
};

export default GridItem;
