import styled from "styled-components";
import ImportIcon from "utils/importIcon";
import SectionWrapper from "components/SectionWrapper";

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
  width: 250%;

  flex-direction: row;
  margin-bottom: 15px;
  animation: scroll-left 10s linear infinite;

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

const SectionWrapperComponent = styled(SectionWrapper)`
  border: 1px solid #c69ed1;
  border-radius: 30%;
  background-image: url("/circle_background.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: border-box;
  background-blend-mode: screen;
  display: flex;
  width: 85%;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  padding: 80px;
  overflow: hidden;
`;

export {
  Container,
  InnerWrapper,
  StyledImportedIcon,
  Title,
  SectionWrapperComponent,
};
