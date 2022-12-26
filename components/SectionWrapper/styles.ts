import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
`;

const Title = styled.div`
  font-size: 5vw;
  color: ${({ theme }) => theme.colors.primary};
  width: 150%;
  z-index: 5;
  text-shadow: ${({ theme }) => `-1px 0px 0px  ${theme.colors.links},
    1px 0px 0px ${theme.colors.links},
    0px -1px 0px ${theme.colors.links},
    0px 1px 0px ${theme.colors.links}`};

  @media (min-width: 1440px) {
    font-size: 4vw;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  margin: 0 auto;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div``;

export { Container, Title, TitleWrapper, Wrapper };
