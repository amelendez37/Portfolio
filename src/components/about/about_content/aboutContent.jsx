import React from "react";
import Styled from "styled-components";

import ProfileImg from "../../../../public/images/profile.png";

const textColor = `#626567`;

const Container = Styled.div`
  width: 75%;
  border: 2px solid #EAF2F8;
  margin: 7rem 0 10rem 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const Profile = Styled.img`
  padding: 5rem 0;
  border-radius: 50%;
  width: 8.5rem;
`;

const Text = Styled.p`
  width: 60%;
  margin: 0 0 0 50%;
  padding-bottom: 7rem;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: ${textColor};
  line-height: 3rem;
`;

const Footer = Styled.div`
  background-color: #F2F2F2;
  color: ${textColor};
  width: 100vw;
  height: 4rem;
  text-align: center;
`;

const FooterText = Styled.p`
  position: relative;
  font-size: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

const AboutContent = () => {
  return (
    <React.Fragment>
      <Container>
        <Profile src={ProfileImg} alt="Picture of me" />
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Container>
      <Footer>
        <FooterText>
          Photos by Raul Varzr, Pankaj Patel, and Benjamin Sow on Unsplash
        </FooterText>
      </Footer>
    </React.Fragment>
  );
};

export default AboutContent;
