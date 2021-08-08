import styled from "styled-components";
import { variables } from "../../../styles/variables";
import Wrapper from "../../Wrapper";

export const FocusWrapper = styled(Wrapper)`
  padding-left: 3rem;
  padding-right: 3rem;
  .buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    button {
      margin-top: 0.5rem;
      a {
        display: block;
        height: 100%;
        width: 100%;
      }
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
  }

  @media screen and (max-width: ${variables.sm}) {
    padding: 3rem 1rem;
  } ;
`;
