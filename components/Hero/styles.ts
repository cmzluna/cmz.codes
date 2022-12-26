import { lighten } from "polished";
import styled, { css } from "styled-components";
import Image from "next/image";
import LinkedIn from "components/Icons/LinkedIn";
import Button from "components/Button";
import WorkResumeButtons from "components/WorkResumeButtons";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  position: relative;
  @media (max-width: 870px) {
    flex-direction: column;
  }
`;
const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 1em;
  border: 3px dotted grey;
  @media (max-width: 870px) {
    margin: 10% 0 10% 0;
  }
`;
const Background = styled(Image)``;

const NavBar = styled.div``;

const Text = styled.div`
  position: absolute;
  color: white;
  font-size: 1.3em;
  top: 10%;
  left: 15%;
  z-index: 3;
  flex-wrap: wrap;
  @media (max-width: 870px) {
    top: 1%;
    right: 4%;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  z-index: 3;
  display: flex;
  position: absolute;
  min-width: 20%;
  height: 25%;
  right: 1%;

  .LinkedIn {
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
    bottom: 30%;
    left: 14%;
  }
`;

export {
  Container,
  Background,
  ToggleContainer,
  NavBar,
  SocialLinks,
  InnerWrapper,
  Text,
  RelativeWrapper,
  WorkResumeBtns,
};
