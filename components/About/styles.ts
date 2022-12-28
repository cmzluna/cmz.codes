import styled from "styled-components";
import Image from "next/image";
import SectionWrapper from "components/SectionWrapper";
import Comma from "components/Comma";
import WorkResumeButtons from "components/WorkResumeButtons";

const Container = styled.div`
  margin: 50px 0;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div``;

const Separator = styled.div`
  width: 100px;
  height: 500px;
  float: left;
  visibility: hidden;
  background-color: lightgrey;
  -webkit-shape-outside: polygon(0 0, 100% 100%, 0 100%);
  shape-outside: polygon(0 0, 75% 100%, 0 100%);
  float: left;
  -webkit-clip-path: polygon(0 0, 75% 100%, 0 100%);
  clip-path: polygon(0 0, 75% 100%, 0 100%);

  @media (min-width: 760px) {
    height: 250px;
  }
`;

const TextWrapper = styled.article`
  flex: 1;
  float: none;
  color: ${({ theme }) => theme.colors.text};
`;

const InnerWrapper = styled.div`
  position: relative;
  margin: 10% 0 0 15%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 8;

  @media (max-width: 768px) {
    margin: 3% 0 0 25%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  float: right;
  width: 30vw;
  height: 30vw;
  shape-outside: circle(50%);
  @media (max-width: 768px) {
    float: none;
    top: -10px;
    margin: 0 auto;
  }
`;

const WorkResumeBtns = styled(WorkResumeButtons)`
  position: relative;
  width: 75%;
  display: flex;
  justify-content: center;
  margin: 0 auto 10vh auto;
`;

const ImageComponent = styled(Image)`
  opacity: 0.85;
  transition: opacity 500ms ease 0s;
  width: 200px;
  border-radius: 9999px;
`;

const SectionWrapperComponent = styled(SectionWrapper)`
  background-image: url("/circle_background-about.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: border-box;
  width: 100%;
  position: relative;

  & :first-child {
    align-self: flex-end;
  }
`;

const CommaComponent = styled(Comma)`
  z-index: 1;
  width: 160px;
  height: 170px;
  opacity: 0.3;
  position: absolute;
  top: -60px;
  left: -100px;
`;

const BottomCommaComponent = styled(CommaComponent)`
  transform: rotate(180deg);
  top: auto;
  left: auto;
  bottom: 0px;
  right: 10px;
`;
//

export {
  Container,
  Wrapper,
  TextWrapper,
  WorkResumeBtns,
  ImageWrapper,
  ImageComponent,
  SectionWrapperComponent,
  CommaComponent,
  BottomCommaComponent,
  InnerWrapper,
  Separator,
};
