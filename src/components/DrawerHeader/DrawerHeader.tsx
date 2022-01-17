import styled from "styled-components";
import { ArrowRightIconStyled, ArrowRightIconWrapper, ItemDateInfo } from "../DailyWeather/DailyWeather";
import React from "react";
import { useAppContextModal } from "../../hooks/useAppContextModal";

const TitleContainer = styled.div`
  height: 8.125rem;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const ArrowRightIconWrapperRestyled = styled(ArrowRightIconWrapper)`
  position: relative;
  height: 3em;
  width: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`;

const ItemDateInfoStyled = styled(ItemDateInfo)`
  margin-left: 0.5rem;
`;

type DrawerHeaderProps = {
  title: string;
};

export const DrawerHeader = ({ title }: DrawerHeaderProps) => {
  const { closeModals } = useAppContextModal();
  return (
    <TitleContainer>
      <ArrowRightIconWrapperRestyled onClick={closeModals}>
        <ArrowRightIconStyled />
      </ArrowRightIconWrapperRestyled>
      <ItemDateInfoStyled fontSize="1.8rem">{title}</ItemDateInfoStyled>
    </TitleContainer>
  );
};
