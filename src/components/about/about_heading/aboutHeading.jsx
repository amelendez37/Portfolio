import React from "react";
import Styled from "styled-components";

import CodeImg from "../../../../public/images/code.jpg";
import TabletopImg from "../../../../public/images/tabletop.jpg";

const Container = Styled.div`
  position: relative;
  display: flex;
  margin-top: 6rem;
  height: 38rem;
`;

const LeftPanel = Styled.img`
  width: 50%;
  height: 48rem;
  filter: brightness(70%);
`;

const RightPanel = Styled.img`
  width: 50%;
  height: 48rem;
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
