import React from "react";
import Styled from "styled-components";

import PhoneImg from "../../../public/images/phone.jpg";
import Email from "../../../public/images/envelop.svg";
import Github from "../../../public/images/github.svg";
import Linkedin from "../../../public/images/linkedin.svg";

const Container = Styled.div`
  position: relative;
`;

const Image = Styled.img`
  display: block;
  width: 100%;
  filter: brightness(90%);
`;

const Title = Styled.p`
  position: absolute;
  top: 13%;
  left: 10%;
  font-size: 9rem;
  font-weight: 700;
  color: #fff;

  @media only screen and (max-width: 72rem) {
    font-size: 7rem;
  }

  @media only screen and (max-width: 53rem) {
    font-size: 6rem;
  }

  @media only screen and (max-width: 37rem) {
    font-size: 4.5rem;
  }
`;

const Contacts = Styled.div`
  position: absolute;
  top: 30%;
  left: 12%;
  list-style: none;

  @media only screen and (max-width: 40.5rem) {
    position: static;
    margin: 8rem 0 10rem 50%;
    transform: translateX(-50%);
  }
`;

const ContactItem = Styled.a`
  color: #fff;
  font-size: 1.9rem;
  margin-left: 2rem;
  font-weight: bold;

  @media only screen and (max-width: 72rem) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 53rem) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 40.5rem) {
    color: black;
  }

  @media only screen and (max-width: 34.5rem) {
    font-size: 1.2rem;
  }
`;

const ContactContainer = Styled.div`
  display: flex;
  align-items: center;
  margin: 4rem 0;

  @media only screen and (max-width: 44rem) {
    margin: 4rem 0;
  }

  @media only screen and (max-width: 27rem) {
    flex-direction: column;
  }
`;

const Icon = Styled.img`
  filter: invert(1);
  width: 10%;

  @media only screen and (max-width: 40.5rem) {
    filter: invert(.5);
  }

  @media only screen and (max-width: 27rem) {
    width: 25%;
    margin-bottom: 2rem;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Image src={PhoneImg} />
      <Title>Get in touch.</Title>
      <Contacts>
        <ContactContainer>
          <Icon src={Email} alt={"Email icon"} />
          <ContactItem>aaronmelendez37@gmail.com</ContactItem>
        </ContactContainer>
        <ContactContainer>
          <Icon src={Linkedin} alt={"LinkedIn icon"} />
          <ContactItem
            href="https://www.linkedin.com/in/aaron-melendez/"
            target="_blank"
          >
            https://www.linkedin.com/in/aaron-melendez/
          </ContactItem>
        </ContactContainer>
        <ContactContainer>
          <Icon src={Github} alt={"Github icon"} />
          <ContactItem href="https://github.com/amelendez37" target="_blank">
            https://github.com/amelendez37
          </ContactItem>
        </ContactContainer>
      </Contacts>
    </Container>
  );
};

export default Contact;
