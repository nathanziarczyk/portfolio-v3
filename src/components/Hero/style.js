import { transparentize } from "polished";
import styled from "styled-components";
import { Wrapper } from "../../styles/base";

export const HeroWrapper = styled(Wrapper)`
  .content-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 3.5rem;
      span {
        display: inline-block;
        white-space: break-spaces;
      }
    }

    p {
      color: ${({ theme }) => theme.text_dark};
      font-size: 1.25rem;
      line-height: 150%;
    }
  }

  img {
    filter: drop-shadow(
      0px -7px 12px ${({ theme }) => (theme.secondary === "#252834" ? transparentize(0.95, theme.secondary) : theme.secondary)}
    );

    @media screen and (max-width: 992px) {
      margin-top: 2rem;
      max-width: 60%;
    }
    @media screen and (max-width: 768px) {
      max-width: 80%;
    }
  }
`;
