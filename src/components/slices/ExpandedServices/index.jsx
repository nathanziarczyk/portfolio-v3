import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { variants } from "./animations";
import {
  ServicesContainer,
  Title,
  Service,
  ExpandedServicesWrapper,
} from "./style";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const ExpandedServices = ({ data }) => {
  const { theme, title } = data.primary;
  const { allPrismicService } = useStaticQuery(query);
  const [ref, controls] = useScrollAnimation(0.1);
  const { edges: services } = allPrismicService;

  return (
    <div ref={ref}>
      <ExpandedServicesWrapper type={theme}>
        <Row>
          <Col>
            {title?.text && (
              <Title
                initial="hidden"
                variants={variants.title}
                animate={controls}
              >
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
                const {
                  title,
                  expanded_body,
                  icon_class,
                  icon,
                } = service.node.data;
                return (
                  <Col md={6} key={i}>
                    <Service
                      initial="hidden"
                      variants={variants.title}
                      animate={controls}
                      custom={i}
                    >
                      <div className="header">
                        <img
                          src={icon.fixed.srcWebp}
                          srcSet={icon.fixed.srcSetWebp}
                          alt=""
                        />
                        <h3>{title.text}</h3>
                      </div>
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: expanded_body.html }}
                      ></div>
                    </Service>
                  </Col>
                );
              })}
          </Row>
        </ServicesContainer>
      </ExpandedServicesWrapper>
    </div>
  );
};

const query = graphql`
  query ExpandedServices {
    allPrismicService {
      edges {
        node {
          id
          data {
            order
            expanded_body {
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

export default ExpandedServices;
