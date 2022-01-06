import styled from "styled-components";
import { variables } from "../../../styles/variables";
import Wrapper from "../../Wrapper";

export const FocusWrapper = styled(Wrapper)`
  padding-left: 3rem;
  padding-right: 3rem;
  position: relative;
  h2,
  .content {
    margin-bottom: 1.5rem;
  }
  .grid {
    width: 10rem;
    height: 10rem;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate(-50%, 30%);
    z-index: -1;
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    button {
      a {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: ${variables.sm}) {
    padding: 3rem 1rem;
  } ;
`;
