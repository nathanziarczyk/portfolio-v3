import styled from "styled-components";
import { variables } from "./variables";

export const Wrapper = styled.div`
  position: relative;
  overflow: visible;
  padding: 6rem 0;
  ${({ bg, theme }) => {
    if (bg === "with_bg") {
      return `
        padding: 6rem 0;
        background-color: ${theme.primary};
      `;
    } else {
      return `
        padding: 0;
        margin: 6rem 0;
      `;
    }
  }};

  @media screen and (max-width: ${variables.md}) {
    ${({ bg, theme }) => {
      if (bg === "with_bg") {
        return `
        padding: 3rem 0;
        background-color: ${theme.primary};
      `;
      } else {
        return `
        padding: 0;
        margin: 3rem 0;
      `;
      }
    }};
  }
`;
