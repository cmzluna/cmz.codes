import styled, { css } from "styled-components";
import ImportIcon from "utils/importIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  flex: 1;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 15px;
  align-items: center;
  width: 100%;
  border: 1px solid yellow;
`;

const StyledImportedIcon = styled(ImportIcon)`
  margin: 10px 10px 0 0;
  fill: ${({ theme }) => theme.icons.primary};
`;

export { Container, InnerWrapper, StyledImportedIcon };
