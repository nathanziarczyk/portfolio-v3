import React from "react";
import { Col, Row } from "react-bootstrap";
import { FocusWrapper } from "./style";
import { Button } from "../../Button/style";
import linkResolver from "../../../../prismic/linkResolver";
import { Link } from "gatsby";

const Focus = ({ data }) => {
  const { primary, items } = data;
  const { title, content, theme } = primary;
  return (
    <FocusWrapper type={theme}>
      <Row>
        <Col sm={12} md={8}>
          <h2>{title.text}</h2>
        </Col>
        <Col sm={12} md={8}>
          {content?.html && (
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content.html }}
            ></div>
          )}
          {items.length && (
            <div className="buttons">
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
                      {item.button_text.text}
                    </Link>
                  </Button>
                );
              })}
            </div>
          )}
        </Col>
      </Row>
    </FocusWrapper>
  );
};

export default Focus;
