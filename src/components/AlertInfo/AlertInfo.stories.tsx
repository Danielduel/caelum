import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AlertInfo } from "./AlertInfo";
import React, { useState } from "react";
import styled from "styled-components";

export default {
  title: "Alert info",
  component: AlertInfo
} as ComponentMeta<typeof AlertInfo>;

const Wrapper = styled.div`
  width: 400px;
`;

export const Info: ComponentStory<typeof AlertInfo> = (args) => {
  const [alertOpen, setAlertOpen] = useState(false);
  return (
    <Wrapper>
      <AlertInfo {...args} setAlertOpen={setAlertOpen} alertOpen={alertOpen} />
    </Wrapper>
  );
};

Info.args = {
  header: "Snow/Ice",
  description: "It is forecasted snowfall causing snow cover increase by 10 cm to 12 cm in places."
};
