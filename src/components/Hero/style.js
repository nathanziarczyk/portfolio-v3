import styled from "styled-components";
export const HeroWrapper = styled.div`
  * {
    text-align: center;
  }

  h1 {
    span {
      display: inline-block;
      white-space: break-spaces;
    }
  }

  p {
    color: ${({ theme }) => theme.text_dark};
  }
`;
