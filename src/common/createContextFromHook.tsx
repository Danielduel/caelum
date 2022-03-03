import React from "react";
import { WithChildren } from "./helpers";

export const createContextFromHook = <HookData,>(hook: () => HookData, initialData: HookData = {} as HookData) => {
  const Context = React.createContext(initialData);
  const WrappedProvider = ({ children }: WithChildren) => {
    const value = hook();
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };
  const wrappedHook = () => React.useContext(Context);

  return {
    Context,
    WrappedProvider,
    wrappedHook
  };
};
