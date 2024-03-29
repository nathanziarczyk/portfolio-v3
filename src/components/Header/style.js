import { transparentize } from "polished";
import styled from "styled-components";
import { variables } from "../../styles/variables";

export const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 2;

  img {
    max-height: 100%;
    height: auto;
    width: 160px;
    max-width: 100%;
  }
`;

export const HeaderEl = styled.header`
  z-index: 2;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5.6rem;
  h2 {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;

    a {
      position: relative;
    }
  }

  nav {
    display: flex;

    ul {
      display: flex;
      align-items: center;
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

          &::after {
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 5px;
            background-color: ${({ theme }) => theme.text};
            transform: translateY(90%) scaleX(0);
            transition: transform 250ms ease-in-out;
            transform-origin: right;
          }

          &:hover::after {
            transform: translateY(90%) scaleX(1);
            transform-origin: left;
          }

          &.active {
            &::after {
              transform: translateY(90%) scaleX(1);
              transform-origin: left;
            }
          }
        }
      }
    }
    select {
      margin-left: 1rem;
    }

    @media screen and (max-width: ${variables.md}) {
      ul {
        display: none;
      }
    }
  }
`;

export const BottomNav = styled.nav`
  position: fixed;
  z-index: 5;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => transparentize(0.8, theme.blue_light)};
  backdrop-filter: blur(0.45rem);
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: center;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      &:not(:last-child) {
        margin-right: 1.5rem;
      }

      a {
        position: relative;
        font-weight: 500;
        font-size: 0.925rem;

        &::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 5px;
          background-color: ${({ theme }) => theme.text};
          transform: translateY(90%) scaleX(0);
          transition: transform 250ms ease-in-out;
          transform-origin: right;
        }

        &:hover::after {
          transform: translateY(90%) scaleX(1);
          transform-origin: left;
        }

        &.active {
          &::after {
            transform: translateY(90%) scaleX(1);
            transform-origin: left;
          }
        }
      }
    }
  }

  @media screen and (min-width: ${variables.md}) {
    display: none;
  }
`;
