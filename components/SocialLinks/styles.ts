import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 3;
  display: flex;

  & * :hover {
    fill: ${({ theme }) => theme.colors.secondary};
    /* animation: floatingIcon 1s ease-in-out forwards infinite; */
    animation: floatingIcon 0.5s;
    transform-style: preserve-3d;
  }
`;

export { Wrapper };
