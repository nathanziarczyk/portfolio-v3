import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "../../styles/base";
import { variants } from "./animations";
import { ServicesContainer, Title, Service } from "./style";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Services = ({ data }) => {
  const { theme, title } = data.primary;
  const { allPrismicService } = useStaticQuery(query);
  const [ref, controls] = useScrollAnimation(0.1);
  const { edges: services } = allPrismicService;

  return (
    <Wrapper bg={theme} ref={ref}>
      <Container>
        <Row>
          <Col>
            {title?.text && (
              <Title initial="hidden" variants={variants} animate={controls}>
                {title?.text}
              </Title>
            )}
          </Col>
        </Row>
        <ServicesContainer>
          <Row>
            {services.map((service, i) => {
              const { title, body, icon_class } = service.node.data;
              return (
                <Col md={6} key={i}>
                  <Service
                    initial="hidden"
                    variants={variants}
                    animate={controls}
                    custom={i}
                  >
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
