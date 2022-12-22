import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  position: absolute;
  top: 55%;
  left: 18%;
  font-size: 3vw;
  color: white;
  width: 150%;
`;

const TitleWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 200px;
  border: 1px dotted red;
`;

const Wrapper = styled.div``;

export { Container, Title, TitleWrapper, Wrapper };
