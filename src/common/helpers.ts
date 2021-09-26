import React from "react";
import styled, { css } from "styled-components";

/*
  Most likely this file will be split in future, just store handy things here
  treat it as constants/common/utils
  if something is more than 3 lines - export to separate file
*/

export const emptyCss = css``;
export const emptyDiv = styled.div``;
export type UnknownObject = Record<string, unknown>;
export type StyledComponentsCss = ReturnType<typeof css>;
export type WithChildren = { children: React.ReactNode };
