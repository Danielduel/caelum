import styled from "styled-components";
import { TransformData, TransformDataItem } from "../services/WeatherData";

const WeatherRowContainer = styled.div`
  display: grid;
  vertical-align: middle;
  grid-template-areas: "formattedDate temp weather weather-icon";
  grid-template-columns: 1fr 1fr repeat(2, 0fr);
  position: relative;
`;

const WeatherRow = ({ formattedDate, formattedDateMnemonic, temp, weather, tempFeel, icon }: TransformDataItem) => (
  <WeatherRowContainer key={formattedDate}>
    <div>{formattedDate}</div>
    <div>{formattedDateMnemonic}</div>
    <div>
      <span>temp&nbsp;</span>
      {temp}
      <span>&#8451;</span>&nbsp;({tempFeel}
      <span>&#8451;</span>)
    </div>
    <div>{weather}</div>
    <div>
      <img src={icon} alt="weather-icon" />
    </div>
  </WeatherRowContainer>
);

const WeatherContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%; /* columnified flex-grow: 1 */
  font-weight: 600;
  white-space: normal;
  padding: 1rem 0;
`;

export const WeatherTable = ({ data }: { data: TransformData | null }) => (
  <WeatherContainer>{data && data.map(WeatherRow)}</WeatherContainer>
);
