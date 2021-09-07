import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Wrapper from "../../Wrapper";
import { variants } from "./animations";
import { ServicesContainer, Title, Service } from "./style";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const Services = ({ data }) => {
  const { theme, title } = data.primary;
  const { allPrismicService } = useStaticQuery(query);
  const [ref, controls] = useScrollAnimation(0.1);
  const { edges: services } = allPrismicService;

  return (
    <div ref={ref}>
      <Wrapper type={theme}>
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
                const { title, body, icon } = service.node.data;
                return (
                  <Col md={6} key={i}>
                    <Service>
                      <div className="header">
                        <img
                          src={icon.fixed.srcWebp}
                          srcSet={icon.fixed.srcSetWebp}
                          alt={icon.alt}
                        />
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
      </Wrapper>
    </div>
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
            icon {
              fixed {
                width
                height
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default Services;
