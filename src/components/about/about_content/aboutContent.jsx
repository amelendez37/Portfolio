import React from "react";
import Styled from "styled-components";

import LeftCard from "./card_left/cardLeft.jsx";
import RightCard from "./card_right/cardRight.jsx";

const Cards = Styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 24rem 0 16rem 0;

  @media only screen and (max-width: 55rem) {
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 68.75rem) {
    margin-top: 18rem;
  }
`;

const Footer = Styled.div`
  background-color: #839192;
  color: #F0F3F4;
  width: 100vw;
  height: 4.5rem;
  text-align: center;
`;

const FooterText = Styled.p`
  position: relative;
  font-size: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
`;

const AboutContent = () => {
  return (
    <React.Fragment>
      <Cards>
        <LeftCard />
        <RightCard />
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
