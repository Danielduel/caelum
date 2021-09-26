import styled, { StyledComponent } from "styled-components";
import { emptyCss, emptyDiv, StyledComponentsCss, WithChildren } from "../../common/helpers";

/*
  Basic layout that hides scroll and takes all available space
  Basing on https://stackoverflow.com/a/16671476/5694206
*/

type ContainerVariants = "flex";
type BasicLyoutProps = WithChildren & {
  containerVariant?: ContainerVariants;
  additionalWrapperStyles?: StyledComponentsCss;
  additionalContainerStyles?: StyledComponentsCss;
};

const BasicLayoutHolder = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
type BasicLayoutWrapperProps = Pick<BasicLyoutProps, "additionalWrapperStyles">;
const BasicLayoutWrapper = styled.div`
  display: block !important; // lock it, it is needed here
  width: calc(100vw + 17px);
  height: 100vh;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
  ${({ additionalWrapperStyles }: BasicLayoutWrapperProps) => additionalWrapperStyles}
`;

type BasicLayoutContainerProps = Pick<BasicLyoutProps, "additionalContainerStyles">;
const BasicLayoutFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ additionalContainerStyles }: BasicLayoutContainerProps) => additionalContainerStyles}
`;

const getContainerForVariant = (
  variant: ContainerVariants
): StyledComponent<"div", Record<string, unknown>, BasicLayoutContainerProps, never> => {
  switch (variant) {
    case "flex":
      return BasicLayoutFlexContainer;
    default:
      return emptyDiv; // possibly not needed
  }
};

const BasicLayout = ({
  children,
  containerVariant = "flex",
  additionalWrapperStyles = emptyCss,
  additionalContainerStyles = emptyCss
}: BasicLyoutProps): JSX.Element => {
  const ContainerElement = getContainerForVariant(containerVariant);
  return (
    <BasicLayoutHolder>
      <BasicLayoutWrapper additionalWrapperStyles={additionalWrapperStyles}>
        <ContainerElement additionalContainerStyles={additionalContainerStyles}>{children}</ContainerElement>
      </BasicLayoutWrapper>
    </BasicLayoutHolder>
  );
};

export { BasicLayout };
