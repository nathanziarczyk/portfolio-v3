import React from "react";
import { Col, Row } from "react-bootstrap";
import { UspItem, UspWrapper } from "./style";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { variants } from "./animations";

const Usp = ({ data }) => {
  const { primary, items } = data;
  const { theme, section_title } = primary;
  const [ref, controls] = useScrollAnimation(0.1);
  return (
    <div ref={ref}>
      <UspWrapper type={theme}>
        <Row>
          {section_title?.text && (
            <Col sm={12}>
              <h2>{section_title.text}</h2>
            </Col>
          )}
          {items.map((item, index) => {
            return (
              <Col md={6} lg={4} key={index}>
                <UspItem
                  animate={controls}
                  initial="hidden"
                  variants={variants.uspItem}
                  className="shadow--medium"
                >
                  <div className="heading">
                    <h4>{item.title.text}</h4>
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
    </div>
  );
};

export default Usp;
