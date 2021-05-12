import { animated, useSpring } from "react-spring";
import { Link } from "gatsby";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemeContext } from "../../context/themeContext";
import { HeaderEl } from "./style";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <HeaderEl>
            <h2>
              <Link to="/">Nathan</Link>
            </h2>
            <nav>
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </HeaderEl>
        </Col>
      </Row>
    </Container>
  );
};

const ThemeToggle = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);

  const properties = {
    moon: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0,
      color: "white",
    },
    sun: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1,
      color: "white",
    },
  };
  const { r, transform, cx, cy, opacity, color } = properties[
    theme === "light" ? "moon" : "sun"
  ];

  const svgContainerProps = useSpring({ transform, color });
  const centerCircleProps = useSpring({ r });
  const maskedCircleProps = useSpring({ cx, cy });
  const linesProps = useSpring({ opacity });
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      onClick={toggleTheme}
      style={{
        cursor: "pointer",
        ...svgContainerProps,
      }}
    >
      <mask id="myMask2">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <animated.circle style={maskedCircleProps} r="9" fill="black" />
      </mask>

      <animated.circle
        cx="12"
        cy="12"
        style={centerCircleProps}
        fill="#252834"
        mask="url(#myMask2)"
      />
      <animated.g stroke="currentColor" style={linesProps}>
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </animated.g>
    </animated.svg>
  );
};

export default Header;
