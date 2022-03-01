import React from "react";
import styled from "styled-components";
import { DayWeatherForecast } from "../models/OpenWeatherAPI";
import { PageContainer } from "../components/layouts/PageContainer";
import { DailyWeather } from "../components/DailyWeather/DailyWeather";
import { ModalPortal } from "../portals/ModalPortal";
import { DailyWeatherDetails } from "../components/DailyWeather/DailyWeatherDetails";
import { ModalContext } from "../AppContext";

export const DailyWeatherListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const DailyWeatherListItemContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export type NextDaysPageProps = {
  daily: DayWeatherForecast[];
  pageRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const NextDaysForecastPage = ({ daily, pageRef }: NextDaysPageProps) => {
  const { openModal } = ModalContext.wrappedHook();
  const [selectedDay, _setSelectedDay] = React.useState<DayWeatherForecast>(daily[0]);
  const setSelectedDay = React.useCallback(
    (f: DayWeatherForecast) => {
      openModal("DAY_MODAL");
      _setSelectedDay(f);
    },
    [openModal, _setSelectedDay]
  );

  const list = daily.slice(1, 6).map((item) => (
    <DailyWeatherListItemContainer key={item.dt}>
      <DailyWeather forecast={item} setSelectedDay={setSelectedDay} />
    </DailyWeatherListItemContainer>
  ));

  return (
    <PageContainer forwardRef={pageRef}>
      <DailyWeatherListContainer>{list}</DailyWeatherListContainer>
      <ModalPortal modalName="DAY_MODAL">
        <DailyWeatherDetails forecast={selectedDay} />
      </ModalPortal>
    </PageContainer>
  );
};
