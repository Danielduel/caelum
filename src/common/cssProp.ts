import type { Properties } from "csstype";

import { css } from "styled-components";
import { prop } from "./helpers";

export const cssProp =
  <T, K extends keyof T>(cssName: keyof Properties, attrName: K, defaultValue = "") =>
  (props: T) => {
    console.log(cssName, attrName, defaultValue, prop<T, K>(attrName, defaultValue)(props));
    // not sure why more direct form of that is bugging intellisense
    const _css = `${cssName}: ${prop<T, K>(attrName, defaultValue)(props)};`;
    return css`
      ${_css}
    `;
  };
