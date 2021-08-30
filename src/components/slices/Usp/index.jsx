import React from "react";
import { Col, Row } from "react-bootstrap";
import { UspItem, UspWrapper } from "./style";

const Usp = ({ data }) => {
  const { primary, items } = data;
  const { theme, section_title } = primary;
  return (
    <UspWrapper type={theme}>
      <Row>
        <Col sm={12}>
          <h2>{section_title.text}</h2>
        </Col>
        {items.map((item) => {
          return (
            <Col md={6} lg={4}>
              <UspItem>
                <div className="heading">
                  <img
                    src={item.icon.fixed.src}
                    width={item.icon.fixed.width}
                    height={item.icon.fixed.height}
                    alt={item.icon.alt}
                  />
                  <h3>{item.title.text}</h3>
                </div>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: item.content.html }}
                ></div>
              </UspItem>
            </Col>
          );
        })}
      </Row>
    </UspWrapper>
  );
};

export default Usp;
