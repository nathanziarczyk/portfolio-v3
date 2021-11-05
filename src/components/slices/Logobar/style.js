import styled from "styled-components";
import { variables } from "../../../styles/variables";
import Wrapper from "../../Wrapper";
import Slider from "react-slick";

export const LogobarWrapper = styled(Wrapper)`
  text-align: center;
  h2 {
    margin-bottom: 3rem;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .logos {
    width: 90%;
    margin: 0 auto;
    a {
      img {
        position: relative;
        display: block;
        height: 100%;
        margin: 0 auto;
        max-height: 5rem;
        max-width: 8rem;
        width: auto;
      }
    }

    @media screen and (max-width: ${variables.lg}) {
      width: 100%;
    }
  }
`;

export const LogobarSlider = styled(Slider)``;
