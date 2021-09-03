import styled from "styled-components";
import { variables } from "../../../styles/variables";
import Wrapper from "../../Wrapper";
import Slider from "react-slick";

export const LogobarWrapper = styled(Wrapper)`
  text-align: center;
  .logos {
    width: 70%;
    margin: 3rem auto 0;
    a {
      opacity: 0.85;
      transition: opacity 0.5s ease-in-out;
      img {
        display: block;
        margin: 0 auto;
        width: auto;
        height: auto;
        max-width: 8rem;
        max-height: 5rem;
      }

      &:hover {
        opacity: 0.5;
      }
    }

    @media screen and (max-width: ${variables.lg}) {
      width: 100%;
    }
  }
`;

export const LogobarSlider = styled(Slider)``;
