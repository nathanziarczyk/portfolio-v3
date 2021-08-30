import styled from "styled-components";
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
      margin-top: 1rem;
      transition: opacity 0.5s ease-in-out;
      &:not(:last-child) {
        margin-right: 2.5rem;
      }
      img {
        height: 3.25rem;
        width: auto;
      }

      &:hover {
        opacity: 0.75;
      }
    }
  }
`;
