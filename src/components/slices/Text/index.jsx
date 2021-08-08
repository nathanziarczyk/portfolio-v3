import React from "react";
import { Col, Row } from "react-bootstrap";
import { ContentContainer, TextWrapper } from "./style";

const Text = ({ data }) => {
  const { primary } = data;
  const { theme, text, size } = primary;
  const columns = size === "flow" ? 8 : 12;
  const offset = size === "flow" ? 2 : 0;
  return (
    <TextWrapper type={theme}>
      <Row>
        <Col className={[`offset-md-${offset}`].join(" ")} md={columns}>
          <ContentContainer
            dangerouslySetInnerHTML={{ __html: text.html }}
          ></ContentContainer>
        </Col>
      </Row>
    </TextWrapper>
  );
};

export default Text;
