import { lighten } from "polished";
import styled, { css } from "styled-components";
import Image from "next/image";
import WorkResumeButtons from "components/WorkResumeButtons";
import Mobile from "components/Hero/components/Mobile";
import SelectorCard from "./components/SelectorCard";
import CheckCard from "./components/CheckCard";
import SocialLinks from "components/SocialLinks";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  opacity: 0;
  animation: pop-in 0.7s ease-out forwards;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 18px;

  @media (max-width: 870px) {
  }
`;

const Background = styled(Image)``;

const NavBar = styled.div``;

const Text = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.text};
  font-size: 3vw;
  top: 10%;
  left: 15%;
  z-index: 1;
  flex-wrap: wrap;
  opacity: 0;
  animation: pop-in 0.7s 0.4s ease-out forwards;

  @media (min-width: 870px) {
    font-size: 2.7vw;
  }
  @media (max-width: 320px) {
    font-size: 4.5vw;
    top: 0;
  }
`;

const SocialLinksTop = styled(SocialLinks)`
  z-index: 3;
  display: flex;
  position: absolute;
  min-width: 20%;
  height: 25%;
  right: 1%;

  & > .LinkedIn {
    position: relative;
    top: 8%;
  }
  .Email {
    position: relative;
    left: 55%;
    top: 22%;
  }
  .GitHub {
    position: relative;
    left: 100%;
    top: 40%;
  }

  @media (max-width: 870px) {
    position: relative;
    justify-content: space-around;
    .LinkedIn {
    }
    .Email {
      position: static;
    }
    .GitHub {
      position: static;
    }
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

const WorkResumeBtns = styled(WorkResumeButtons)`
  @media (min-width: 870px) {
    bottom: 20%;
    left: 15%;
  }
`;

const MobileComponent = styled(Mobile)`
  position: absolute;
  width: 25%;
  bottom: 36%;
  right: 20%;
  z-index: 1;
  border-radius: 9px;
  animation: float1 4s 2s ease-in-out forwards infinite;
  @media (max-width: 870px) {
    bottom: 30%;
    right: 13%;
  }
`;

const SelectorCardComponent = styled(SelectorCard)`
  position: absolute;
  width: 26%;
  bottom: 35%;
  right: 32%;
  z-index: 1;
  border-radius: 9px;
  animation: float2 4s 1.2s ease-in-out forwards infinite;
  @media (max-width: 870px) {
    bottom: 25%;
    right: 28%;
  }
`;

const CheckCardComponent = styled(CheckCard)`
  position: absolute;
  width: 40%;
  top: 40%;
  right: 20%;
  z-index: 1;
  border-radius: 9px;

  animation: float3 4s 2.2s ease-in-out forwards infinite;
  @media (max-width: 870px) {
    top: 53%;
    right: 16%;
  }
`;

export {
  Container,
  Background,
  ToggleContainer,
  NavBar,
  SocialLinksTop,
  InnerWrapper,
  Text,
  RelativeWrapper,
  WorkResumeBtns,
  MobileComponent,
  SelectorCardComponent,
  CheckCardComponent,
};
