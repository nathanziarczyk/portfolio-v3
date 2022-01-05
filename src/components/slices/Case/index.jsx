import React from "react";
import { CaseWrapper, Content } from "./style";
import { Col, Row } from "react-bootstrap";

export default function Case({ data }) {
  const { image, title1, body1, quote, quotee, link } = data.primary;
  return (
    <CaseWrapper className={"case-wrapper"} type="without_bg">
      <Row>
        <Col md={8}>
          <img
            src={image.fluid.src}
            width={1200}
            height={300}
            alt={image.alt}
            loading="lazy"
          />
        </Col>
        <Col md={4}>
          <Content>
            {title1 && <h3>{title1}</h3>}
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: body1.html }}
            ></div>

            <div className="quote-container">
              <div
                className="quote"
                dangerouslySetInnerHTML={{ __html: quote.html }}
              ></div>
              <p className="quotee">{quotee}</p>
            </div>
          </Content>
        </Col>
      </Row>
    </CaseWrapper>
  );
}
