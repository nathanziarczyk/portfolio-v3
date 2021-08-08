import styled from "styled-components";
import Wrapper from "../../Wrapper";

export const UspWrapper = styled(Wrapper)`
  h2 {
    text-align: center;
  }
`;

export const UspItem = styled.div`
  margin-top: 2rem;
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    img {
      width: 10%;
      height: auto;
    }

    h3 {
      width: 85%;
      margin: 0;
    }
  }
`;
