import styled from "styled-components";

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
`;
