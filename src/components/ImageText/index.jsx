import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "../../styles/base";
import { Content, ImageTextWrapper, Image } from "./style";
import headshot from "../../images/me_web_2.png";
import { Button } from "../Button/style";

const ImageText = () => {
  return (
    <ImageTextWrapper>
      <Wrapper style={{ paddingBottom: 0, paddingTop: "4rem" }}>
        <Container>
          <Row>
            <Col lg={7}>
              <Content>
                <h2>Let me help you give your company the boost it needs</h2>
                <p>
                  Now more than ever, a good digital appearance is key to the
                  success of your company. A user friendly, professional looking
                  and unique website or webshop is a great investment to attract
                  new clients.
                </p>
                <p>
                  My experience with platforms like Wordpress, Shopify, Drupal,
                  and others allows me to select the right tools for the job.
                  This way you can be sure you'll get the most out of your
                  investment.
                </p>
                <p>Sounds good?</p>
                <div className="links">
                  <Button primary>Get in touch</Button>
                </div>
              </Content>
            </Col>
            <Col lg={5}>
              <Image>
                <img src={headshot} alt="" />
              </Image>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </ImageTextWrapper>
  );
};

export default ImageText;
