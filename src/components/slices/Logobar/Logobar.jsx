import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import linkResolver from "../../../../prismic/linkResolver";
import { LogobarWrapper } from "./style";

const Logobar = ({ data }) => {
  const {
    primary: { title },
    items,
  } = data;
  return (
    <LogobarWrapper>
      <Container>
        <Row>
          <Col sm={12}>
            {title?.text && <h2>{title.text}</h2>}
            <div className="logos">
              {items.map((logo) => {
                console.log(logo);
                return (
                  <Link to={linkResolver(logo.link)} target="_blank">
                    <img src={logo.logo.fixed.src} alt="" />
                  </Link>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </LogobarWrapper>
  );
};

export default Logobar;
