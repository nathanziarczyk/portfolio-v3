import styled from "styled-components";
import Wrapper from "../../Wrapper";

export const IconBlocksWrapper = styled(Wrapper)`
  h2 {
    margin-bottom: 0.5rem;
    position: sticky;
    top: 6rem;
  }
`;

export const IconBlocksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1.875rem;

  .icon-block {
    h3 {
      margin-bottom: 0.75rem;
    }
    img {
      width: 15%;
    }
  }
`;
