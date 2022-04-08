import React from "react";
import styled from "styled-components";
import { debounce, uniqueBy } from "../../common/helpers";
import { CrosshairsIcon } from "../Icon/Icons";
import { DrawerHeader } from "../DrawerHeader/DrawerHeader";
import { LastLocations } from "./LastLocations";
import { useLastLocations } from "../../hooks/useLastLocations";
import { useTranslation } from "react-i18next";
import { ModalContext, TargetLocationContext } from "../../AppContext";
import { useGeocoding } from "../../hooks/useGeocoding";
import { GeoLocation } from "../../models/GeocodingAPI";

const LocationWrapper = styled.div``;

const LocationModalContent = styled.div`
  padding: 1rem;
`;

const CrosshairsIconStyled = styled(CrosshairsIcon)`
  width: 1.25em;
  padding-right: 0.25em;
`;

const LocationModalInput = styled.input`
  width: 100%;
  margin-top: 2rem;
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  font-size: 1rem;
  box-sizing: border-box;
`;

const LocationModalListContainer = styled.div`
  padding: 1rem 0.75rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
`;

const LocationModalOption = styled.div`
  padding: 0.25rem 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
`;

type LocationModalListItemProps = {
  setLocation: (location: GeoLocation) => void;
};

type LocationModalListProps = {
  setLocation: (location: GeoLocation) => void;
  cities: GeoLocation[];
};

const LocationModalListItem = ({ setLocation }: LocationModalListItemProps) => {
  const _LocationModalListItem = (location: GeoLocation) => {
    return (
      <LocationModalOption key={`${location.lat}/${location.lon}`} onClick={() => setLocation(location)}>
        <CrosshairsIconStyled />
        {location.name} {location.state} [{location.country}]
      </LocationModalOption>
    );
  };
  return _LocationModalListItem;
};

const LocationModalList = ({ cities, setLocation }: LocationModalListProps): JSX.Element => {
  const { t } = useTranslation();
  const compareFn = (item1: GeoLocation, item2: GeoLocation) =>
    item1.name === item2.name && item1.state === item2.state && item1.country === item2.country;
  if (!cities || cities.length <= 0) {
    return t("noResults");
  }
  const items = uniqueBy(cities, compareFn).map(LocationModalListItem({ setLocation }));
  return <LocationModalListContainer>{items}</LocationModalListContainer>;
};

const LocationModal = () => {
  const [searchField, setSearchField] = React.useState("");
  const { setTargetLocation } = TargetLocationContext.wrappedHook();
  const { closeModals } = ModalContext.wrappedHook();
  const [lastLocations, selectLastLocation] = useLastLocations();
  const [cities, , fetchData] = useGeocoding();
  const { t } = useTranslation();

  const debouncedFetchData = React.useCallback(debounce(fetchData, 700), [debounce, fetchData]);

  const setLocation = React.useCallback(
    (location: GeoLocation) => {
      setTargetLocation(location.name, location.lat.toString(), location.lon.toString());
      selectLastLocation(location);
      closeModals();
    },
    [setTargetLocation, selectLastLocation, closeModals]
  );

  const onInputChange = React.useCallback(
    (inputValue: string) => {
      setSearchField(inputValue);
      if (inputValue.length > 3) {
        debouncedFetchData(inputValue);
      }
    },
    [setSearchField, debouncedFetchData]
  );

  return (
    <LocationWrapper>
      <DrawerHeader title={t("location")} />
      <LocationModalContent>
        <LastLocations setLocation={setLocation} locations={lastLocations} />
        <LocationModalInput onChange={(e) => onInputChange(e.target.value)} value={searchField} />
        <LocationModalList setLocation={setLocation} cities={cities || []} />
      </LocationModalContent>
    </LocationWrapper>
  );
};

export { LocationModal };
