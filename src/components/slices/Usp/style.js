import styled from "styled-components";
import Wrapper from "../../Wrapper";
import { motion } from "framer-motion";

export const UspWrapper = styled(Wrapper)`
margin-top 4.5rem;
  h2 {
    text-align: center;
  }
`;

export const UspItem = styled(motion.div)`
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.bg};
  height: calc(100% - 1.5rem);
  padding: 2rem 1.5rem;

  p:last-child {
    margin-bottom: 0;
  }

  .heading {
    img {
      width: 10%;
      height: auto;
    }

    h4 {
      margin-bottom: 1.5rem;
    }
  }
`;
