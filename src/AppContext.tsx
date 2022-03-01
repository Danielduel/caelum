import React from "react";
import { createContextFromHook } from "./common/createContextFromHook";
import { WithChildren } from "./common/helpers";
import { useModal } from "./hooks/useModal";
import { useTargetLocation } from "./hooks/useTargetLocation";
import { useWeatherIconsConfig } from "./hooks/useWeatherIconsConfig";

type WithWrappedProvider = { WrappedProvider: (p: WithChildren) => JSX.Element };
export const ModalContext = createContextFromHook(useModal);
export const TargetLocationContext = createContextFromHook(useTargetLocation);
export const WeatherIconsConfigContext = createContextFromHook(useWeatherIconsConfig);

export const contextCentipede = (hookContextArr: WithWrappedProvider[]) =>
  hookContextArr.reduce(
    (P, { WrappedProvider }) =>
      ({ children }: WithChildren) =>
        (
          <P>
            <WrappedProvider>{children}</WrappedProvider>
          </P>
        ),
    (p: WithChildren) => <>{p.children}</>
  );

const AppProvider = contextCentipede([ModalContext, TargetLocationContext, WeatherIconsConfigContext]);

export default AppProvider;
