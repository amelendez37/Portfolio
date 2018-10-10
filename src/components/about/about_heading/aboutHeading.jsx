import React from "react";
import Styled from "styled-components";

import RaspberriesImg from "../../../../public/images/raspberries.jpg";
import TabletopImg from "../../../../public/images/tabletop.jpg";

const Container = Styled.div`
  position: relative;
  display: flex;
  margin-top: 5rem;
  height: 38rem;
`;

const LeftPanel = Styled.img`
  width: 50%;
  filter: brightness(40%);
`;

const RightPanel = Styled.img`
  width: 50%;
`;

const ImageText = Styled.p`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  padding: 6% 10%;
  border: 1.5px solid rgba(253, 254, 254, .85);
  color: rgba(253, 254, 254, .85);
  text-align: center;
  font-size: 1.7rem;
  font-weight: 400;
`;

const AboutHeading = () => {
  return (
    <Container>
      <LeftPanel src={TabletopImg} alt="Open laptop" />
      <ImageText>Front End Developer</ImageText>
      <RightPanel
        src={RaspberriesImg}
        alt="Coffee mug resting on laptop keyboard"
      />
    </Container>
  );
};

export default AboutHeading;
