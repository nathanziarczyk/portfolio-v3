import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
            <motion.li>
              <Link
                to={"/"}
                className={["/" === pathname ? "active" : ""].join(" ")}
              >
                Home
              </Link>
            </motion.li>
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
