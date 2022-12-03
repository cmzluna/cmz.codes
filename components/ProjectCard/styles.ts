import { lighten } from "polished";
import styled, { css } from "styled-components";
import Image from "next/image";

const Container = styled.div`
  padding: 0;
  border: 1px solid #e2e2e2;
  border-radius: 0.7rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const FigureWrapper = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  max-height: 220px;
  overflow: hidden;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
`;
const ImageComponent = styled(Image)`
  width: 100%;
`;

const Title = styled.figcaption`
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
`;

const Description = styled.p``;

export { Container, FigureWrapper, ImageComponent, Title, Description };
