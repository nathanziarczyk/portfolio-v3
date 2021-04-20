import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "../../styles/base";
import { Content, ImageTextWrapper, Image } from "./style";
import headshot from "../../images/me_web_2.png";
import { Button } from "../Button/style";
import { graphql } from "gatsby";
import SanityImage from "gatsby-plugin-sanity-image";
import BlockContent from "@sanity/block-content-to-react";

const ImageText = ({ data }) => {
  console.log(data);
  return (
    <ImageTextWrapper>
      <Wrapper style={{ paddingBottom: 0, paddingTop: "4rem" }}>
        <Container>
          <Row>
            <Col lg={7}>
              <Content>
                <BlockContent blocks={data.body}></BlockContent>
              </Content>
            </Col>
            <Col lg={5}>
              <Image>
                <SanityImage
                  {...data.image}
                  width={300}
                  alt="Sweet Christmas!"
                />
              </Image>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </ImageTextWrapper>
  );
};

export default ImageText;
