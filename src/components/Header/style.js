import styled from "styled-components";
import { colors } from "../../styles/variables";

export const HeaderEl = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
        background-color: ${colors.accent};
        z-index: -1;
        opacity: 0.45;
      }
    }
  }

  nav {
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        &:not(:last-child) {
          margin-right: 2.5rem;
        }

        a {
          font-size: 1.25rem;
          font-weight: 800;
        }
      }
    }
  }
`;
