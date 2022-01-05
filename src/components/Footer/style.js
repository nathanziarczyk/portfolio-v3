import styled from "styled-components";
import { variables } from "../../styles/variables";

export const FooterWrapper = styled.footer`
  padding: 2rem 0;

  p {
    margin: 0;
  }

  a {
    display: block;
  }

  img {
    max-height: 100%;
    height: auto;
    width: 160px;
    max-width: 100%;
  }

  h2 {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;
  }
`;

export const FooterTab = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
