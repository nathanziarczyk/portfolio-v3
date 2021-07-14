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

body {
  background-color: ${({ theme }) => theme.bg};
  font-family: ${variables.baseFont};
  font-weight: ${variables.regular};
  line-height: ${variables.lineHeight};
  transition: color .3s ease-out;

  .splash{
    position: fixed;
    z-index: 20;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;

    p{
      font-family: "Orelega One";
      line-height: 8.5rem;
      font-size: 8.5rem;
      -webkit-text-stroke: 2px #252834;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      animation: hue 10s infinite linear;
      background-image: -webkit-linear-gradient(92deg, #FFC15C, #FFC15C);
    }
    @keyframes hue {
      from {
        -webkit-filter: hue-rotate(0deg);
      }
      to {
        -webkit-filter: hue-rotate(-90deg);
      }
    }
    visibility: hidden;
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

a{
  text-decoration: none;
  color: ${({ theme }) => theme.text};
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
h6,
p {
  color: ${({ theme }) => theme.text};
}

h1 {
  font-size: 2.5rem;
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
