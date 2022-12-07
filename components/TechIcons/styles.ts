import styled, { css } from "styled-components";
import ImportIcon from "utils/importIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 15px;
  align-items: center;
  width: 100%;
`;

const Title = styled.span`
  margin: 5px 0 5px 0;
  font-size: 1.2rem;
`;

const StyledImportedIcon = styled(ImportIcon)`
  margin: 10px 10px 0 0;
  fill: ${({ theme }) => theme.icons.primary};
`;

export { Container, InnerWrapper, StyledImportedIcon, Title };
