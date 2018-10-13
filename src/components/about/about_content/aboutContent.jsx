import React from "react";
import Styled from "styled-components";

import ProfileImg from "../../../../public/images/profile.png";

const textColor = "#626567";

const Cards = Styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10% 0;
`;

const Card = Styled.div`
  width: 37%;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.25);
  text-align: center;
`;

const Profile = Styled.img`
  margin-top: 4rem;
  border-radius: 50%;
  width: 8.5rem;
`;

const Text = Styled.p`
  width: 70%;
  margin: 0 0 0 50%;
  padding: 6rem 0 3rem 0;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: ${textColor};
  line-height: 3rem;
`;

const TextRightTitle = Styled.p`
  font-size: 3rem;
  color: ${textColor};
  padding: 3rem 0 5rem 0;
`;

const TextContainerLeft = Styled.div`
  width: 100%;
  background-color: #F2F3F4;
  clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 18%);
`;

const TextContainerRight = Styled.div`
  width: 100%;
  background-color: #F2F3F4;
  clip-path: polygon(0 100%, 100% 55%, 100% 0, 0 0);
`;

const Footer = Styled.div`
  background-color: #839192;
  color: #F0F3F4;
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
      <Cards>
        <Card>
          <Profile src={ProfileImg} alt="Picture of me" />
          <TextContainerLeft>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only.
            </Text>
          </TextContainerLeft>
        </Card>
        <Card>
          <TextContainerRight>
            <TextRightTitle>SKILLS</TextRightTitle>
          </TextContainerRight>
          <Text>LIST SKILLS</Text>
        </Card>
      </Cards>
      <Footer>
        <FooterText>
          Photos by Raul Varzr, Pankaj Patel, and Benjamin Sow on Unsplash
        </FooterText>
      </Footer>
    </React.Fragment>
  );
};

export default AboutContent;
