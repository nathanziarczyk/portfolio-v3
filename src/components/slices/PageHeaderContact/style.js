import styled from "styled-components";
import Wrapper from "../../Wrapper/index";
import { variables } from "../../../styles/variables";

export const PageHeaderWrapper = styled(Wrapper)`
  margin-top: 4rem;
  @media screen and (max-width: ${variables.md}) {
    margin-top: 1rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 3.5rem;
  @media screen and (max-width: ${variables.md}) {
    font-size: 2.75rem;
  }
`;

export const Body = styled.div``;
