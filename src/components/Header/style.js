import styled from "styled-components";

export const HeaderEl = styled.header`
  position: relative;
  z-index: 2;
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
        background-color: ${({ theme }) => theme.accent};
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
        display: flex;
        &:not(:last-child) {
          margin-right: 1.5rem;
        }

        a {
          position: relative;
          font-size: 1.1rem;
          font-weight: 700;

          &::after {
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 5px;
            background-color: ${({ theme }) => theme.accent};
            transform: translateY(90%) scaleX(0);
            transition: transform 250ms ease-in-out;
            transform-origin: right;
          }

          &:hover::after {
            transform: translateY(90%) scaleX(1);
            transform-origin: left;
          }
        }
      }
    }
  }
`;
