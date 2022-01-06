import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BasicInfo } from "./BasicInfo";
import React from "react";
import { setupAppContextProvider } from "../../AppContext";

export default {
  title: "Weather basic information",
  component: BasicInfo,
  argTypes: {
    weatherCode: {
      options: [
        200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502,
        503, 504, 511, 520, 521, 522, 531, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622, 701, 711, 721, 731,
        741, 751, 761, 762, 771, 781, 800, 801, 802, 803, 804
      ],
      control: { type: "select" }
    }
  }
} as ComponentMeta<typeof BasicInfo>;

const WrappedAppContextProvider = setupAppContextProvider();

export const Info: ComponentStory<typeof BasicInfo> = (args) => (
  <WrappedAppContextProvider>
    <BasicInfo {...args} />
  </WrappedAppContextProvider>
);

Info.args = {
  description: "Thunderstorm",
  weatherCode: 210,
  temp: 16.2
};
