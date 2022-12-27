import { lighten } from "polished";
import styled, { css } from "styled-components";
import Link from "next/link";
import { BiMoon } from "react-icons/bi";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";

const reactSvgComponentToMarkupString = (Component: any, props: any) =>
  `data:image/svg+xml, ${encodeURIComponent(
    renderToStaticMarkup(createElement(Component, props))
  )}`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

const NavBarWrapper = styled.div`
  z-index: 3;
  display: flex;
  width: 90%;
  margin: 10px auto;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  width: 20%;
  margin: 7px;
`;

const ToggleContainer = styled.div<{ isOn: boolean }>`
  position: relative;
  width: 50px;
  height: 34px;
  background: ${({ theme }) => lighten(0.2, theme.colors.primary)};
  border-radius: 20px;
  margin-right: 15px;
  cursor: pointer;
  transition: all 200ms ease;
  ::after {
    position: absolute;
    transition: all 600ms ease;
    content: ${({ color, theme, isOn }) =>
      `url(${reactSvgComponentToMarkupString(BiMoon, {
        color: isOn ? "#000" : "yellow",
        size: 22,
      })})`};
    top: 3px;
    left: 5px;
    width: 24px;
    height: 24px;
    border-radius: 100px;
  }
  ${({ theme, isOn }) =>
    isOn &&
    css`
      background: ${lighten(0.2, theme.colors.primary)};
      border-color: ${theme.colors.primary};
      ::after {
        left: 19px;
        background: ${theme.colors.primary};
      }
    `}
`;

export { Container, ToggleContainer, NavBarWrapper, NavLink };
