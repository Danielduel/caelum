import styled from "styled-components";
import arrowIcon from "./arrow-icon.svg";

// https://www.svgrepo.com/svg/9249/down-chevron

const ArrowIconImg = styled.img``;

const ArrowIcon = (props) => {
  return <ArrowIconImg {...props} src={arrowIcon} />;
};

export { ArrowIcon };
