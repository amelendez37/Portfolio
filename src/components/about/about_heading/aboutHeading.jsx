import React from "react";
import Styled from "styled-components";

import CodeImg from "../../../../public/images/code.jpg";
import TabletopImg from "../../../../public/images/tabletop.jpg";

const Container = Styled.div`
  position: relative;
  display: flex;
  height: 38rem;
`;

const LeftPanel = Styled.img`
  width: 50%;
  height: 48rem;
  filter: brightness(70%);

  @media only screen and (max-width: 68.75em) {
    height: 42rem;
  }

  @media only screen and (max-width: 54em) {
    width: 100%;
    height: 38rem;
  }

  @media only screen and (max-width: 40em) {
    height: 33rem;
  }

  @media only screen and (min-width: 120em) {
    height: 52rem;
  }

  @media only screen and (min-width: 160em) {
    height: 68rem;
  }
`;

const RightPanel = Styled.img`
  width: 50%;
  height: 48rem;

  @media only screen and (max-width: 68.75em) {
    height: 42rem;
  }

  @media only screen and (max-width: 54em) {
    display: none;
  }

  @media only screen and (min-width: 120em) {
    height: 52rem;
  }

  @media only screen and (min-width: 160em) {
    height: 68rem;
  }
`;

const ImageText = Styled.p`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -25%);
  padding: 6% 10%;
  border: 1.5px solid rgba(253, 254, 254, .85);
  color: rgba(253, 254, 254, .9);
  text-align: center;
  font-size: 2.2rem;
  font-weight: 400;

  @media only screen and (max-width: 68.75em) {
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 54em) {
    left: 50%;
    padding: 8% 12%;
  }

  @media only screen and (max-width: 40em) {
    transform: translate(-50%, -75%);
  }

  @media only screen and (min-width: 120em) {
    font-size: 3.5rem;
    padding: 5% 8%;
  }

  @media only screen and (min-width: 160em) {
    font-size: 4rem;
    transform: translate(-50%, -10%);
  }
`;

const AboutHeading = () => {
  return (
    <Container>
      <LeftPanel src={CodeImg} alt="Open laptop" />
      <ImageText>Full Stack Developer</ImageText>
      <RightPanel
        src={TabletopImg}
        alt="Coffee mug resting on laptop keyboard"
      />
    </Container>
  );
};

export default AboutHeading;
