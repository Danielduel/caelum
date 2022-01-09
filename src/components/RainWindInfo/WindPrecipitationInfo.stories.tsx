import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { WindPrecipitationInfo } from "./WindPrecipitationInfo";

export default {
  title: "Wind and precipitation info",
  component: WindPrecipitationInfo
} as ComponentMeta<typeof WindPrecipitationInfo>;

export const Info: ComponentStory<typeof WindPrecipitationInfo> = (args) => {
  return <WindPrecipitationInfo {...args} />;
};

Info.args = {
  currentWeather: {
    temp: 5,
    snow: { "1h": 0 },
    rain: { "1h": 6 },
    wind_speed: 12
  }
};
