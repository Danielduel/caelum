import styled, { css } from "styled-components";
import { WithChildren, WithForwardRefDiv } from "../../common/helpers";
import { useAppContextModal } from "../../hooks/useAppContextModal";

type PageContainerWrapperProps = {
  isModalOpen: boolean;
};
const isModalOpenPageContainerWrapper = ({ isModalOpen }: PageContainerWrapperProps) =>
  isModalOpen
    ? css`
        transform: translateX(-80vw);
      `
    : css`
        transform: translateX(-0vw);
      `;
const PageContainerWrapper = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  transition: transform 0.2s ease-in-out;
  ${isModalOpenPageContainerWrapper}
`;

export const PageContainer = ({ children, forwardRef }: WithChildren & WithForwardRefDiv) => {
  const { isModalOpen } = useAppContextModal();
  return (
    <PageContainerWrapper ref={forwardRef} isModalOpen={isModalOpen}>
      {children}
    </PageContainerWrapper>
  );
};
