import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BasicInfo } from "./BasicInfo";
import React from "react";
import { setupAppContextProvider } from "../../AppContext";

export default {
  title: "Today weather basic information",
  component: BasicInfo
} as ComponentMeta<typeof BasicInfo>;

const WrappedAppContextProvider = setupAppContextProvider();

export const Primary: ComponentStory<typeof BasicInfo> = () => (
  <WrappedAppContextProvider>
    <BasicInfo description={"test"} weatherCode={210} temp={20.4} />
  </WrappedAppContextProvider>
);
