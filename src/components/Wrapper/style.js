import styled from "styled-components";
import { variables } from "../../styles/variables";

export const ContainerWrapper = styled.div`
  &:last-of-type {
    .wrapper-wrapper {
      margin-bottom: 0 !important;
    }
  }
`;

export const WrapperWrapper = styled.div`
  position: relative;
  overflow: visible;
  padding: 6rem 0;
  ${({ type, theme }) => {
    if (type === "with_bg") {
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

  @media screen and (max-width: ${variables.md}) {
    ${({ type, theme }) => {
      if (type === "with_bg") {
        return `
          padding: 3rem 0;
        `;
      } else {
        return `
          padding: 0;
          margin: 5rem 0;
        `;
      }
    }};
  }
`;
