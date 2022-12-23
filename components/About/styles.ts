import { lighten } from "polished";
import styled, { css } from "styled-components";
import Image from "next/image";
import SectionWrapper from "components/SectionWrapper";
import Comma from "components/Comma";

const Container = styled.div`
  margin: 50px 0;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div``;

const TextWrapper = styled.article`
  position: relative;
  flex: 1;
  min-width: 300px;
  color: ${({ theme }) => theme.colors.text};
`;

const InnerWrapper = styled.div`
  margin: 0 0 0 10%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;

  /* border-radius: 999px; */
`;

const ImageComponent = styled(Image)`
  opacity: 1;
  transition: opacity 500ms ease 0s;
  width: 200px;
  border-radius: 9999px;
`;

const SectionWrapperComponent = styled(SectionWrapper)`
  background-image: url("/circle_background.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: border-box;
  display: flex;
  width: 100%;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-items: center;
  padding: 120px 0 170px 80px;
  overflow: hidden;

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
  right: -100px;
`;
//

export {
  Container,
  Wrapper,
  TextWrapper,
  ImageWrapper,
  ImageComponent,
  SectionWrapperComponent,
  CommaComponent,
  BottomCommaComponent,
  InnerWrapper,
};
