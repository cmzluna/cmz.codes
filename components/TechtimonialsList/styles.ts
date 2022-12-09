import styled, { css } from "styled-components";
import ImportIcon from "utils/importIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  @keyframes scroll-left {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  width: 200%;
  animation: scroll-left 20s linear infinite;

  :hover {
    animation-play-state: paused;
  }
`;

const Title = styled.span`
  margin: 5px 0 5px 0;
  font-size: 1.2rem;
`;

const StyledImportedIcon = styled(ImportIcon)`
  margin: 10px 10px 0 0;
  fill: ${({ theme }) => theme.icons.primary};
`;

export { Container, InnerWrapper, StyledImportedIcon, Title };
