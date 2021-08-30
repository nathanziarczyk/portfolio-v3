import { animated, useSpring } from "react-spring";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemeContext } from "../../context/themeContext";
import { BottomNav, HeaderEl, HeaderWrapper } from "./style";
import linkResolver from "../../../prismic/linkResolver";
import { motion } from "framer-motion";
import { variants } from "./animations";
import { useLocation } from "@reach/router";
import { Button } from "../Button/style";

const Header = () => {
  const { prismicMainNavigation } = useStaticQuery(query);
  const { links } = prismicMainNavigation.data;
  const { pathname } = useLocation();
  return (
    <>
      <BottomNav>
        <Container>
          <ul>
            {links.map((link, i) => {
              return (
                <motion.li>
                  <Link
                    to={linkResolver(link.link)}
                    className={[
                      linkResolver(link.link) === pathname ? "active" : "",
                    ].join(" ")}
                  >
                    {link.label.text}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </Container>
      </BottomNav>
      <HeaderWrapper>
        <Container>
          <Row>
            <Col style={{ position: "static" }}>
              <HeaderEl>
                {typeof window !== "undefined" ? (
                  window.GATSBY_LOADED ? (
                    <h2>
                      <Link to="/">Nathan</Link>
                    </h2>
                  ) : (
                    <motion.h2
                      variants={variants.fadeIn}
                      initial={
                        typeof window !== "undefined" && !window.GATSBY_LOADED
                          ? "hidden"
                          : ""
                      }
                      animate={"visible"}
                      custom={0}
                    >
                      <Link to="/">Nathan</Link>
                    </motion.h2>
                  )
                ) : (
                  <motion.h2
                    variants={variants.fadeIn}
                    initial={
                      typeof window !== "undefined" && !window.GATSBY_LOADED
                        ? "hidden"
                        : ""
                    }
                    animate={"visible"}
                    custom={0}
                  >
                    <Link to="/">Nathan</Link>
                  </motion.h2>
                )}

                <nav>
                  <ul>
                    {links.map((link, i) => {
                      return i === links.length - 1 ? (
                        <Button>
                          <Link to={linkResolver(link.link)}>
                            {link.label.text}
                          </Link>
                        </Button>
                      ) : (
                        <motion.li>
                          <Link
                            to={linkResolver(link.link)}
                            className={[
                              linkResolver(link.link) === pathname
                                ? "active"
                                : "",
                            ].join(" ")}
                          >
                            {link.label.text}
                          </Link>
                        </motion.li>
                      );
                    })}
                    {/* <motion.li
                  variants={variants.fadeIn}
                  initial={"hidden"}
                  animate={"visible"}
                  custom={links.length}
                >
                  <ThemeToggle />
                </motion.li> */}
                  </ul>
                </nav>
              </HeaderEl>
            </Col>
          </Row>
        </Container>
      </HeaderWrapper>
    </>
  );
};

const ThemeToggle = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);

  const handleClick = () => {
    toggleTheme();
  };

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
      onClick={handleClick}
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

const query = graphql`
  query MainNavigation {
    prismicMainNavigation {
      data {
        links {
          link {
            id
            link_type
            uid
            url
            target
          }
          label {
            text
          }
        }
      }
    }
  }
`;

export default Header;
