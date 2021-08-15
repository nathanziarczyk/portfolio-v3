import React from "react";
import { Container } from "react-bootstrap";
import { WrapperWrapper } from "./style";

const Wrapper = ({ children, type = "without_bg", className, index }) => {
  if (type === "rounded")
    return (
      <Container>
        <WrapperWrapper index={index} className={className} type={type}>
          {children}
        </WrapperWrapper>
      </Container>
    );
  return (
    <WrapperWrapper index={index} className={className} type={type}>
      <Container>{children}</Container>
    </WrapperWrapper>
  );
};

export default Wrapper;
