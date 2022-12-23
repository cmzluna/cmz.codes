import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  position: absolute;
  top: 25%;
  left: 18%;
  font-size: 6vw;
  color: ${({ theme }) => theme.colors.primary};
  width: 150%;

  @media (min-width: 1440px) {
    font-size: 4vw;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 200px;
`;

const Wrapper = styled.div``;

export { Container, Title, TitleWrapper, Wrapper };
