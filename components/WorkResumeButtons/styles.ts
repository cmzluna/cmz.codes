import styled from "styled-components";

const Buttons = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;

  @media (max-width: 870px) {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export { Buttons };
