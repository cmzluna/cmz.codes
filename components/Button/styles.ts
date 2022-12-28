import { lighten } from "polished";
import styled from "styled-components";

interface ButtonContainerProps {
  isLightMode: boolean;
}

const ButtonContainer = styled.div<ButtonContainerProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 16px;
  border: ${({ theme }) => ` 0.7px solid ${theme.colors.primary}`};
  color: ${({ color, theme }) => color || theme.colors.primary};
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  max-width: 200px;
  padding: 1rem 1.6rem;
  font-size: 1.2rem;
  transition: all 500ms ease;
  margin: 6px;
  ${({ theme }) => theme.colors.background};

  @media (max-width: 870px) {
    flex-direction: column;
    color: ${({ isLightMode, theme }) => isLightMode && theme.colors.primary};
  }

  :hover {
    background: ${({ theme }) => lighten(0.2, theme.colors.primary)};
    transform: scale(1.1);
  }
`;

export { ButtonContainer };
