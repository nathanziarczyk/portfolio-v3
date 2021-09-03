import { motion } from "framer-motion";
import { Link } from "gatsby";
import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import linkResolver from "../../../../prismic/linkResolver";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { variants } from "./animations";
import { LogobarSlider, LogobarWrapper } from "./style";
import Slider from "react-slick";
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
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    swipe: false,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
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
              </LogobarSlider>
            </Col>
          </Row>
        </Container>
      </LogobarWrapper>
    </div>
  );
};

export default Logobar;
