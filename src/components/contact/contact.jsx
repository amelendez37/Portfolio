import React from "react";
import Styled from "styled-components";

import PhoneImg from "../../../public/images/phone.jpg";

const Container = Styled.div`
  position: relative;
  margin-top: 5rem;
`;

const Image = Styled.img`
  width: 100%;
`;

const Text = Styled.p`
  position: absolute;
  top: 10rem;
  left: 10rem;
  font-size: 7rem;
  font-weight: 700;
  color: #fff;
`;

const Contacts = Styled.ul`
  position: absolute;
  top: 23rem;
  left: 13rem;
  list-style: none;
`;

const ContactItem = Styled.li`
  color: #fff;
`;

const Contact = () => {
  return (
    <Container>
      <Image src={PhoneImg} />
      <Text>Get in touch.</Text>
      <Contacts>
        <ContactItem>Email</ContactItem>
        <ContactItem>LinkedIn</ContactItem>
        <ContactItem>Github</ContactItem>
      </Contacts>
    </Container>
  );
};

export default Contact;
