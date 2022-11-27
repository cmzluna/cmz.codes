import { lighten } from "polished";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
`;

const ToggleContainer = styled.div<{ isOn: boolean }>`
  position: relative;
  width: 40px;
  height: 20px;
  background: lightgray;
  border-radius: 20px;
  border: 1px solid grey;
  cursor: pointer;
  transition: all 200ms ease;
  ::after {
    position: absolute;
    transition: all 200ms ease;
    content: "";
    top: 2px;
    left: 2px;
    background: grey;
    width: 15px;
    height: 15px;
    border-radius: 100px;
  }
  ${({ theme, isOn }) =>
    isOn &&
    css`
      background: ${lighten(0.4, theme.colors.primary)};
      border-color: ${theme.colors.primary};
      ::after {
        left: 22px;
        background: ${theme.colors.primary};
      }
    `}
`;

export { Container, ToggleContainer };
