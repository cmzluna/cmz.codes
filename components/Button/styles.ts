import { lighten } from "polished";
import styled from "styled-components";

const ButtonContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  max-width: 200px;
  padding: 1rem;
  font-size: 1.6rem;
  transition: all 300ms ease;
  :hover {
    background: ${({ theme }) => lighten(0.2, theme.colors.primary)};
    font-size: 1.2rem;
  }
`;

export { ButtonContainer };
