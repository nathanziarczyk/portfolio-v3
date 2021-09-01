import { motion } from "framer-motion";
import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import linkResolver from "../../../../prismic/linkResolver";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { variants } from "./animations";
import { LogobarWrapper } from "./style";

const Logobar = ({ data }) => {
  const {
    primary: { title, theme },
    items,
  } = data;
  const [ref, controls] = useScrollAnimation();
  return (
    <div ref={ref}>
      <LogobarWrapper type={theme}>
        <Container>
          <Row>
            <Col sm={12}>
              {title?.text && (
                <motion.h2
                  initial={"hidden"}
                  animate={controls}
                  variants={variants.image}
                >
                  {title.text}
                </motion.h2>
              )}
              <div className="logos">
                {items.map((logo, i) => {
                  return (
                    <Link to={linkResolver(logo.link)} target="_blank">
                      <picture>
                        <source
                          srcset={logo.logo.fluid.srcWebp}
                          type="image/webp"
                        />
                        <source srcset={logo.logo.fluid.src} type="image/png" />
                        <motion.img
                          srcset={logo.logo.fluid.src}
                          alt={logo.logo.alt}
                          loading="lazy"
                          initial={"hidden"}
                          animate={controls}
                          variants={variants.image}
                        />
                      </picture>
                    </Link>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </LogobarWrapper>
    </div>
  );
};

export default Logobar;
