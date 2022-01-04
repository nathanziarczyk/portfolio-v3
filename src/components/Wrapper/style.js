import styled from "styled-components";
import { variables } from "../../styles/variables";

export const WrapperWrapper = styled.div`
  position: relative;
  overflow: visible;
  padding: 6rem 0;
  ${({ type, theme }) => {
    if (type === "rounded") {
      return `
        margin: 6rem 0;
        padding: 4rem 6rem;
        border-radius: 2rem;
        background-color: ${theme.blue_light};
      `;
    } else if (type === "with_bg") {
      return `
        margin: 6rem 0;
        padding: 4rem 0;
        background-color: ${theme.blue_light};
      `;
    } else {
      return `
        padding: 0;
        margin: 6rem 0;
      `;
    }
  }};

  ${({ index }) => {
    if (index === 1)
      return `
    margin-top: 2rem;
    `;
  }}

  @media screen and (max-width: ${variables.md}) {
    ${({ type, theme }) => {
      if (type === "rounded") {
        return `
          padding: 3rem 2rem;
        `;
      } else if (type === "with_bg") {
        return `
          padding: 3rem 0;
          background-color: ${theme.blue};
        `;
      } else {
        return `
          padding: 0;
          margin: 3rem 0;
        `;
      }
    }};
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
