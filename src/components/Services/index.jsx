import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "../../styles/base";
import { ServicesContainer, Title, Service } from "./style";

const Services = ({ data }) => {
  const { theme, title } = data.primary;
  const { allPrismicService } = useStaticQuery(query);
  const { edges: services } = allPrismicService;
  return (
    <Wrapper bg={theme}>
      <Container>
        <Row>
          <Col>{title?.text && <Title>{title?.text}</Title>}</Col>
        </Row>
        <ServicesContainer>
          <Row>
            {services
              .sort((current, next) => {
                if (current.node.data.order < next.node.data.order) {
                  return -1;
                }
                if (current.node.data.order > next.node.data.order) {
                  return 1;
                }
                return 0;
              })
              .map((service, i) => {
                const { title, body, icon_class } = service.node.data;
                return (
                  <Col md={6} key={i}>
                    <Service>
                      <div className="header">
                        <i className={icon_class.text}></i>
                        <h3>{title.text}</h3>
                      </div>
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: body.html }}
                      ></div>
                    </Service>
                  </Col>
                );
              })}
          </Row>
        </ServicesContainer>
      </Container>
    </Wrapper>
  );
};

const query = graphql`
  query Services {
    allPrismicService {
      edges {
        node {
          id
          data {
            order
            body {
              text
              html
            }
            title {
              text
            }
            icon_class {
              text
            }
          }
        }
      }
    }
  }
`;

export default Services;
