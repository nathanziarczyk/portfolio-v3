import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BottomNav, HeaderEl, HeaderWrapper } from "./style";
import linkResolver from "../../../prismic/linkResolver";
import { motion } from "framer-motion";
import { variants } from "./animations";
import { useLocation } from "@reach/router";
import { Button } from "../Button/style";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = ({ langData, navigationData }) => {
  const { links } = navigationData.data;
  const { pathname } = useLocation();
  const homePath = langData.lang === "nl-be" ? "/" : "/en";

  return (
    <>
      <BottomNav>
        <Container>
          <ul>
            <motion.li>
              <Link
                to={homePath}
                className={[
                  "/" === pathname || "/en" === pathname ? "active" : "",
                ].join(" ")}
              >
                Home
              </Link>
            </motion.li>
            {links.map((link, i) => {
              return (
                <motion.li key={i}>
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
                      <Link to={homePath}>
                        <img
                          src={"/images/logo_gradient.svg"}
                          alt="Logo"
                          loading="lazy"
                          width="160"
                          height="42"
                        />
                      </Link>
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
                      <Link to="/">
                        <img
                          src={"/images/logo_gradient.svg"}
                          alt="Logo"
                          loading="lazy"
                          width="160"
                          height="42"
                        />
                      </Link>
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
                    <Link to="/">
                      <img
                        src={"/images/logo_gradient.svg"}
                        alt="Logo"
                        loading="lazy"
                        width="160"
                        height="42"
                      />
                    </Link>
                  </motion.h2>
                )}
                <nav>
                  <ul>
                    {links.map((link, i) => {
                      return i === links.length - 1 ? (
                        <Button key={i}>
                          <Link to={linkResolver(link.link)}>
                            {link.label.text}
                          </Link>
                        </Button>
                      ) : (
                        <motion.li key={i}>
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
                  <LanguageSwitcher langData={langData} />
                </nav>
              </HeaderEl>
            </Col>
          </Row>
        </Container>
      </HeaderWrapper>
    </>
  );
};

export default Header;
