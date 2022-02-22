import styled from "styled-components";

export const SelectorWrapper = styled.div`
  position: relative;
  cursor: pointer;
  &::after {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    position: absolute;
    right: 10px;
    z-index: 3;
    top: 50%;
    transform: translate(40%, -50%);
  }
`;

export const LanguageSelector = styled.select`
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  z-index: 2;
  padding: 0.5rem;
  height: max-content;
  vertical-align: bottom;
  margin: auto;
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  padding-right: 20px;
`;
