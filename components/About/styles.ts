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
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 999px;
  border: 1px solid grey;
`;
const ImageComponent = styled(Image)`
  opacity: 1;
  transition: opacity 500ms ease 0s;
  position: absolute;
  width: 250px;
  border-radius: 9999px;
`;

const SectionWrapperComponent = styled(SectionWrapper)`
  display: grid;
  width: 90%;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 15px;
`;

const CommaComponent = styled(Comma)`
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
};
