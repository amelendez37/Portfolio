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

  @media only screen and (max-width: 68.75rem) {
    height: 42rem;
  }

  @media only screen and (max-width: 54rem) {
    width: 100%;
    height: 38rem;
  }

  @media only screen and (max-width: 40rem) {
    height: 33rem;
  }
`;

const RightPanel = Styled.img`
  width: 50%;
  height: 48rem;

  @media only screen and (max-width: 68.75rem) {
    height: 42rem;
  }

  @media only screen and (max-width: 54rem) {
    display: none;
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

  @media only screen and (max-width: 68.75rem) {
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 54rem) {
    left: 50%;
    padding: 8% 12%;
  }

  @media only screen and (max-width: 40rem) {
    transform: translate(-50%, -75%);
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
