import { lighten } from "polished";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 4px 10px;
  padding: 28px;
  border-radius: 0.7rem;
  border-color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  min-width: 280px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 12px;
  transition: all 500ms ease;
  :hover {
    background: ${({ theme }) => theme.colors.background.hover};
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`;

const Separator = styled.span`
  display: block;
  width: 2.5rem;
  height: 4px;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Text = styled.div`
  flex: 1;
`;

const Author = styled.h3`
  margin: 0;
`;

const Position = styled.p`
  margin: 0;
`;

const Comma = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  top: -35px;
  left: -12px;
  width: 45px;
  height: 44px;
  font-size: 6em;
  position: absolute;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export { Container, Title, Text, Author, Position, Separator, Comma };
