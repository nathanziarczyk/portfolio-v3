import React from "react";
import { Container } from "react-bootstrap";
import { WrapperWrapper, ContainerWrapper } from "./style";

const Wrapper = ({ children, type = "without_bg", className, index }) => {
  if (type === "rounded")
    return (
      <ContainerWrapper>
        <Container>
          <WrapperWrapper
            index={index}
            className={[className, "wrapper-wrapper"].join(" ")}
            type={type}
          >
            {children}
          </WrapperWrapper>
        </Container>
      </ContainerWrapper>
    );
  return (
    <ContainerWrapper>
      <WrapperWrapper
        index={index}
        className={[className, "wrapper-wrapper"].join(" ")}
        type={type}
      >
        <Container>{children}</Container>
      </WrapperWrapper>
    </ContainerWrapper>
  );
};

export default Wrapper;
