import styled from "styled-components";
import { variables } from "../../styles/variables";

export const WrapperWrapper = styled.div`
  position: relative;
  overflow: visible;
  padding: 6rem 0;
  ${({ type, theme }) => {
    if (type === "rounded") {
      return `
        margin: 4.5rem 0;
        padding: 3rem 6rem;
        border-radius: 2rem;
        background-color: ${theme.primary};
      `;
    } else if (type === "with_bg") {
      return `
        margin: 4.5rem 0;
        padding: 3rem 0;
        background-color: ${theme.primary};
      `;
    } else {
      return `
        padding: 0;
        margin: 4.5rem 0;
      `;
    }
  }};

  @media screen and (max-width: ${variables.md}) {
    ${({ type, theme }) => {
      if (type === "rounded") {
        return `
          padding: 3rem 2rem;
        `;
      } else if (type === "with_bg") {
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
