import React from "react";
import Styled from "styled-components";

import PhoneImg from "../../../public/images/phone.jpg";
import Email from "../../../public/images/envelop.svg";
import Github from "../../../public/images/github.svg";
import Linkedin from "../../../public/images/linkedin.svg";

const Container = Styled.div`
  position: relative;
  margin-top: 5rem;
`;

const Image = Styled.img`
  display: block;
  width: 100%;
  filter: brightness(90%);
`;

const Title = Styled.p`
  position: absolute;
  top: 13rem;
  left: 11rem;
  font-size: 9rem;
  font-weight: 700;
  color: #fff;
`;

const Contacts = Styled.div`
  position: absolute;
  top: 30rem;
  left: 14rem;
  list-style: none;
`;

const ContactItem = Styled.a`
  color: #fff;
  font-size: 1.9rem;
  margin-left: 2rem;
`;

const SubContainer = Styled.div`
  display: flex;
  align-items: center;
  margin: 4rem 0;
`;

const Icon = Styled.img`
  filter: invert(1);
  width: 4rem;
`;

const Contact = () => {
  return (
    <Container>
      <Image src={PhoneImg} />
      <Title>Get in touch.</Title>
      <Contacts>
        <SubContainer>
          <Icon src={Email} alt={"Email icon"} />
          <ContactItem>aaronmelendez37@gmail.com</ContactItem>
        </SubContainer>
        <SubContainer>
          <Icon src={Linkedin} alt={"LinkedIn icon"} />
          <ContactItem
            href="https://www.linkedin.com/in/aaron-melendez/"
            target="_blank"
          >
            https://www.linkedin.com/in/aaron-melendez/
          </ContactItem>
        </SubContainer>
        <SubContainer>
          <Icon src={Github} alt={"Github icon"} />
          <ContactItem href="https://github.com/amelendez37" target="_blank">
            https://github.com/amelendez37
          </ContactItem>
        </SubContainer>
      </Contacts>
    </Container>
  );
};

export default Contact;
