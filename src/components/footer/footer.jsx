import React from "react";
import Styled from "styled-components";

const FooterContainer = Styled.footer`
  background-color: #839192;
  color: #F0F3F4;
  width: 100vw;
  height: 4.5rem;
  text-align: center;

  @media only screen and (min-width: 120em) {
    height: 5.5rem;
  }

  @media only screen and (min-width: 120em) {
    height: 6.5rem;
  }
`;

const FooterText = Styled.p`
  position: relative;
  font-size: 1.2rem;
  top: 50%;
  transform: translateY(-50%);

  @media only screen and (min-width: 120em) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 160em) {
    font-size: 2.4rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Photos by Raul Varzr, Pankaj Patel, and Benjamin Sow on Unsplash
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
