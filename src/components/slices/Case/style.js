import styled from "styled-components";
import Wrapper from "../../Wrapper/index";

export const CaseWrapper = styled(Wrapper)``;

export const Content = styled.div`
  padding: 2rem 1.5rem;
  background: ${({ theme }) => theme.bg};
  height: 100%;

  h3 {
    font-size: 1.5625rem;
  }

  .quote-container {
    margin-top: 4rem;
    position: relative;

    &::before {
      content: "“";
      transform: translateX(-50%);
      position: absolute;
      left: 0;
      top: 0;
      font-size: 5rem;
    }

    .quotee {
      font-weight: 500;
    }
  }
`;
