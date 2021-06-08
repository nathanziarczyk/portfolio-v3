import styled from "styled-components";
import { theme } from "./theme";

export const Wrapper = styled.div`
  padding: 6rem 0;
  background-color: ${({ bg }) => (bg === "with_bg" ? theme.primary : "none")};
`;
