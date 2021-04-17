import styled from "styled-components";
import { colors } from "../../styles/variables";

export const ImageTextWrapper = styled.div`
  background-color: ${colors.primary};
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 6rem;
`;
export const Image = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
