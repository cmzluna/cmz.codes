import { lighten } from "polished";
import styled, { css } from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

const NavBarWrapper = styled.div`
  z-index: 3;
  display: flex;
  width: 90%;
  margin: 15px auto;
  justify-content: space-around;
  padding: 15px;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
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

export { Container, ToggleContainer, NavBarWrapper, NavLink };
