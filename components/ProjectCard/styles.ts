import { lighten } from "polished";
import styled, { css } from "styled-components";
import Image from "next/image";

const Container = styled.div`
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: 0.7rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
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

const IconsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid blue;
`;

const Description = styled.p``;

export {
  Container,
  FigureWrapper,
  ImageComponent,
  Title,
  Description,
  IconsWrapper,
};
