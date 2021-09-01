import styled from "styled-components";
import { variables } from "../../../styles/variables";
import Wrapper from "../../Wrapper";

export const LogobarWrapper = styled(Wrapper)`
  text-align: center;
  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &:empty {
      display: none;
    }
    a {
      transition: opacity 0.5s ease-in-out;
      margin: 1.5rem 1.05rem 0;
      img {
        height: 3.25rem;
        width: auto;
      }

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
