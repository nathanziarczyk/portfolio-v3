import { transparentize } from "polished";
import styled from "styled-components";
import { variables } from "../../../styles/variables";
import Wrapper from "../../Wrapper";

export const HeroWrapper = styled(Wrapper)`
  margin: 3rem 0;
  .content-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h1 {
      font-size: 3.5rem;
      margin: 0;
      color: ${({ theme }) => theme.text_dark};
      @media screen and (max-width: ${variables.md}) {
        font-size: 3rem;
      }
      span {
        display: inline-block;
        white-space: break-spaces;
      }
    }

    p {
      color: ${({ theme }) => theme.text};
      font-size: 1.5rem;
      line-height: 150%;
    }
  }

  img {
    @media screen and (max-width: 992px) {
      margin-top: 2rem;
      max-width: 60%;
    }
    @media screen and (max-width: 768px) {
      max-width: 80%;
    }
  }

  .buttons {
    text-align: center;
    margin-top: 1rem;

    button:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;
