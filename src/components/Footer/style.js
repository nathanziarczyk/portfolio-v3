import styled from "styled-components";
import { variables } from "../../styles/variables";

export const FooterWrapper = styled.div`
  padding: 2rem 0;

  p {
    margin: 0;
  }

  h2 {
    margin: 0;
    font-size: 2.5rem;

    a {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: -5px;
        left: -5px;
        height: 40%;
        background-color: ${({ theme }) => theme.accent};
        z-index: -1;
        opacity: 0.45;
      }
    }
  }
`;

export const FooterTab = styled.div`
  h3 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    li,
    a {
      color: ${({ theme }) => theme.text};
    }
  }
  @media screen and (max-width: ${variables.lg}) {
    margin-top: 1.5rem;

    h3 {
      margin-bottom: 0.5rem;
    }
  } ;
`;
