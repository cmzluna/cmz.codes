import { lighten } from "polished";
import styled from "styled-components";

const ButtonContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  border: 0.7px solid black;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  max-width: 200px;
  padding: 1rem 1.6rem;
  font-size: 1.2rem;
  transition: all 300ms ease;
  margin: 6px;
  :hover {
    background: ${({ theme }) => lighten(0.2, theme.colors.primary)};
  }
`;

export { ButtonContainer };
