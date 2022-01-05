import { transparentize } from "polished";
import { createGlobalStyle } from "styled-components";
import { variables } from "./variables";

export const GlobalStyles = createGlobalStyle`
:root {
  --shadow-color: 0deg 0% 0%;
  --shadow-elevation-low:
    0.3px 0.5px 0.6px hsl(var(--shadow-color) / 0.12),
    0.4px 0.8px 0.9px -1.5px hsl(var(--shadow-color) / 0.11),
    1px 2px 2.3px -3px hsl(var(--shadow-color) / 0.1);
  --shadow-elevation-medium:
    0.3px 0.5px 0.6px hsl(var(--shadow-color) / 0.13),
    0.7px 1.5px 1.7px -1px hsl(var(--shadow-color) / 0.12),
    2px 3.9px 4.6px -2px hsl(var(--shadow-color) / 0.11),
    5px 10px 11.7px -3px hsl(var(--shadow-color) / 0.1);
  --shadow-elevation-high:
    0.3px 0.5px 0.6px hsl(var(--shadow-color) / 0.12),
    1.2px 2.5px 2.9px -0.4px hsl(var(--shadow-color) / 0.12),
    2.3px 4.7px 5.5px -0.9px hsl(var(--shadow-color) / 0.11),
    4px 8px 9.4px -1.3px hsl(var(--shadow-color) / 0.11),
    6.7px 13.4px 15.7px -1.7px hsl(var(--shadow-color) / 0.1),
    10.8px 21.6px 25.4px -2.1px hsl(var(--shadow-color) / 0.1),
    16.7px 33.5px 39.3px -2.6px hsl(var(--shadow-color) / 0.09),
    25px 50px 58.7px -3px hsl(var(--shadow-color) / 0.09);
}

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
  border: 2.5px solid ${({ theme }) => theme.blue_light};
  position: relative;
  transition: color 0.3s ease-in-out, background-color 0.3s ease;

  @media screen and (max-width: ${variables.md}){
    display: none !important;
  }
}

body {
  background-color: ${({ theme }) => theme.bg};
  font-family: ${variables.baseFont};
  font-weight: ${variables.regular};
  line-height: ${variables.lineHeight};
  transition: color .3s ease-out;
  height: max-content;

  *{
    outline-color: ${({ theme }) => transparentize(0.5, theme.text)};
  }
}

.gradient{
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: auto;

  @media screen and (max-width: ${variables.sm}) {
    min-height: 100vh;
  }
}

html{
  font-size: ${variables.fontSize};
  @media screen and (max-width: ${variables.md}) {
      font-size: 1.125rem;
  }
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
  color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
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
  color: ${({ theme }) => theme.text};
  &:not(header a)::not(.disable-global) {
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    position: relative;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: ${({ theme }) => theme.text};
  font-weight: 800;
}

h1 {
  font-size: 3.05rem;

  @media screen and (max-width: ${variables.md}){
    font-size: 2.25rem;
  }
}

h2 {
  font-size: 2.44375rem;
}

h3 {
  font-size: 1.94375rem;
}

h4 {
  font-size: 1.5625rem;
}

h5 {
  font-size: 1.25rem;
}

h6 {
  font-size: 1rem;
}
`;
