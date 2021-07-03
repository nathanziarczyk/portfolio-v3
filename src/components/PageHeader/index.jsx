import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Body, PageHeaderWrapper, Title } from "./style";

const PageHeader = (props) => {
  const { primary } = props.data;
  return (
    <PageHeaderWrapper>
      <Container>
        <Row>
          <Col>
            <Title>{primary.title.text}</Title>
            {primary.body?.html && (
              <Body dangerouslySetInnerHTML={{ __html: primary.body.html }} />
            )}
          </Col>
        </Row>
      </Container>
    </PageHeaderWrapper>
  );
};

export default PageHeader;
