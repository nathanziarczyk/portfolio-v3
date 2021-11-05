import { motion } from "framer-motion";
import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import linkResolver from "../../../../prismic/linkResolver";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { variants } from "./animations";
import { LogobarSlider, LogobarWrapper } from "./style";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Logobar = ({ data }) => {
  const {
    primary: { title, theme },
    items,
  } = data;
  const [ref, controls] = useScrollAnimation();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: false,
    speed: 1000,
    slidesToShow: items.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
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
              <LogobarSlider {...settings} className="logos">
                {items.map((logo, i) => {
                  return (
                    <a key={i} href={logo.link.url} target="_blank">
                      <picture>
                        <source
                          srcSet={logo.logo.fluid.srcWebp}
                          type="image/webp"
                        />
                        <source srcSet={logo.logo.fluid.src} type="image/png" />
                        <motion.img
                          srcSet={logo.logo.fluid.src}
                          alt={logo.logo.alt}
                          loading="lazy"
                          initial={"hidden"}
                          animate={controls}
                          variants={variants.image}
                        />
                      </picture>
                    </a>
                  );
                })}
              </LogobarSlider>
            </Col>
          </Row>
        </Container>
      </LogobarWrapper>
    </div>
  );
};

export default Logobar;
