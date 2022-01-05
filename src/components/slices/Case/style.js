import styled from "styled-components";
import Wrapper from "../../Wrapper/index";

export const CaseWrapper = styled(Wrapper)``;

export const ImageWrapper = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;

    &:hover {
      background: ${({ theme }) => theme.bg};
    }
  }
`;

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
      margin-bottom: 0;
    }
  }
`;
