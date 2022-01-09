import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { DailyWeather } from "./DailyWeather";
import { DayWeatherForecast } from "../../models/OpenWeatherAPI";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import { setupAppContextProvider } from "../../AppContext";

export default {
  title: "Future day item",
  component: DailyWeather
} as ComponentMeta<typeof DailyWeather>;

const WrappedAppContextProvider = setupAppContextProvider();

const Wrapper = styled.div`
  width: 400px;
`;

export const Info: ComponentStory<typeof DailyWeather> = (args) => {
  return (
    <WrappedAppContextProvider>
      <Wrapper>
        <DailyWeather {...args} setSelectedDay={action("selectItem")} />
      </Wrapper>
    </WrappedAppContextProvider>
  );
};

Info.args = {
  forecast: {
    dt: 1640300400,
    temp: {
      day: 5
    },
    weather: [{ id: 600 }]
  } as DayWeatherForecast
};
