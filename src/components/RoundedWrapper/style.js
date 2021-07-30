import { Row } from "react-bootstrap";
import styled from "styled-components";

export const WrapperWrapper = styled(Row)`
  background: blue;
  padding: 3rem 6rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.primary};
`;
