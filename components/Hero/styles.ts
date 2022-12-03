import { lighten } from "polished";
import styled, { css } from "styled-components";
import Image from "next/image";
import LinkedIn from "components/Icons/LinkedIn";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  border: 2px solid red;
  @media (max-width: 870px) {
    flex-direction: column;
  }
`;
const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 4px dotted black;
  @media (max-width: 870px) {
  }
`;
const Background = styled(Image)``;

const NavBar = styled.div``;

const Text = styled.div`
  position: absolute;
  width: 300px;
  color: white;
  border: 1px solid blue;
  top: 25%;
  left: 15%;
  z-index: 3;

  @media (max-width: 870px) {
    top: 15%;
    right: 4%;
  }
`;

const Buttons = styled.div`
  position: absolute;
  width: 200px;
  height: 90px;
  background-color: red;
  border: 3px solid green;
  bottom: 30%;
  left: 20%;
  z-index: 2;

  @media (max-width: 870px) {
    position: relative;
  }
`;

const SocialLinks = styled.div`
  align-items: center;
  position: absolute;
  min-width: 20%;
  height: 25%;
  right: 1%;
  > .LinkedIn {
  }
  > .Email {
    position: relative;
    left: 15%;
    top: 20%;
  }
  > .GitHub {
    position: relative;
    left: 24%;
    top: 55%;
  }

  @media (max-width: 870px) {
    position: relative;
  }
`;
const RelativeWrapper = styled.div`
  position: relative;
`;

const ToggleContainer = styled.div<{ isOn: boolean }>`
  position: relative;
  width: 40px;
  height: 24px;
  background: lightgray;
  border-radius: 20px;
  border: 1px solid grey;
  cursor: pointer;
  transition: all 200ms ease;
  ::after {
    position: absolute;
    transition: all 2200ms ease;
    content: "";
    top: 3px;
    left: 4px;
    background: grey;
    width: 15px;
    height: 16px;
    border-radius: 100px;
  }
  ${({ theme, isOn }) =>
    isOn &&
    css`
      background: ${lighten(0.4, theme.colors.primary)};
      border-color: ${theme.colors.primary};
      ::after {
        left: 19px;
        background: ${theme.colors.primary};
      }
    `}
`;

export {
  Container,
  Background,
  ToggleContainer,
  NavBar,
  Buttons,
  SocialLinks,
  InnerWrapper,
  Text,
  RelativeWrapper,
};
