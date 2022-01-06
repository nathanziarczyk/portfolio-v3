import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { variants } from "./animations";
import { HeroWrapper } from "./style";
import linkResolver from "../../../../prismic/linkResolver";
import { Link } from "gatsby";
import { Button } from "../../Button/style";

const Hero = ({ data }) => {
  const {
    primary: { hero_title, hero_body },
    items,
  } = data;
  return (
    <HeroWrapper type={"without_bg"}>
      <Row>
        <Col lg={8} className="">
          <div className="content-wrapper">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants.title}
            >
              {hero_title.text}
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants.content}
              dangerouslySetInnerHTML={{ __html: hero_body.html }}
            ></motion.div>
            <motion.div
              className="buttons"
              initial={"hidden"}
              animate="visible"
              variants={variants.buttons}
            >
              {items.map((item, index) => {
                return (
                  <Button
                    key={index}
                    _type={index === 0 ? "primary" : "secondary"}
                  >
                    <Link
                      target={
                        item.button_link.link_type === "Web" ? "_blank" : null
                      }
                      to={linkResolver(item.button_link)}
                    >
                      {item.button_label.text}
                    </Link>
                  </Button>
                );
              })}
            </motion.div>
          </div>
        </Col>
      </Row>
    </HeroWrapper>
  );
};

export default Hero;
