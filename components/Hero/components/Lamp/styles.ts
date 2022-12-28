import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 65%;
  bottom: 8%;
  right: 5%;
  z-index: 2;
  opacity: 0;
  animation: pop-in 0.7s 1.6s ease-out forwards;

  @media (max-width: 870px) {
    bottom: 5%;
    right: 4%;
    width: 55%;
  }
`;

export { Wrapper };
