import React from "react";
import Styled from "styled-components";

const FooterContainer = Styled.div`
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
