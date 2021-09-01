import { transparentize } from "polished";
import { createGlobalStyle } from "styled-components";
import { variables } from "./variables";

export const GlobalStyles = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
}

.calendly-badge-content{
  padding: 0.65rem 1.75rem !important;
  font-size: 1rem !important;
  border-radius: 1.5rem !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
  border: 2.5px solid ${({ theme }) => theme.light_blue};
  position: relative;
  transition: color 0.3s ease-in-out, background-color 0.3s ease;
}

body {
  background-color: ${({ theme }) => theme.bg};
  font-family: ${variables.baseFont};
  font-weight: ${variables.regular};
  line-height: ${variables.lineHeight};
  transition: color .3s ease-out;
  padding-top: 5.6rem;

  *{
    outline-color: ${({ theme }) => transparentize(0.5, theme.text)};
  }

  @media screen and (max-width: ${variables.md}) {
      padding-bottom:5rem;
  }
}

html{
  font-size: ${variables.fontSize};
}

.overflow-hidden {
  overflow: hidden;
}

img {
  max-width: 100%;
  height: auto;
}

ul {
  padding-left: 1.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 0.5em;
}

main {
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${variables.headFont};
  line-height: 100%;
  font-weight: ${variables.regular};
  margin-top: 0;
}

textarea {
  font-family: ${variables.baseFont};
}

span {
  // white-space: pre;
}

a {
  text-decoration: dotted;
  color: ${({ theme }) => theme.text_dark};
  &:not(header a)::not(.disable-global) {
    font-weight: bold;
    color: ${({ theme }) => theme.accent};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 1px;
      background-color: ${({ theme }) => theme.accent};
      transform: translateY(90%) scaleX(0);
      transition: transform 250ms ease-in-out;
      transform-origin: right;
      opacity: 0.75;
    }

    &:hover::after {
      transform: translateY(90%) scaleX(1);
      transform-origin: left;
    }
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: ${({ theme }) => theme.text_dark};
  font-weight: 800;
}
p {
  color: ${({ theme }) => theme.text_dark};
}

h1 {
  font-size: 2.5rem;

  @media screen and (max-width: ${variables.md}){
    font-size: 2.25rem;
  }
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.25rem;
}

h5 {
  font-size: 1.125rem;
}

h6 {
  font-size: 1rem;
}
`;
