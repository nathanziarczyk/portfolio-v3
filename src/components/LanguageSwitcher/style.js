import styled from "styled-components";
export const LanguageSelector = styled.select`
  position: relative;
  z-index: 2;
  padding: 0 0.5rem;
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
`;
