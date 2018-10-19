import React from "react";
import Styled from "styled-components";

import ProfileImg from "../../../../../public/images/profile.png";

const Card = Styled.div`
  width: 37%;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.25);
  text-align: center;

  @media only screen and (max-width: 55em) {
    margin-bottom: 3.5rem;
    width: 65%;
  }

  @media only screen and (max-width: 44em) {
    width: 85%;
  }

  @media only screen and (min-width: 160em) {
    margin-top: 20rem;
  }
`;

const Profile = Styled.img`
  margin-top: 4rem;
  border-radius: 50%;
  width: 11rem;
`;

const TextContainerLeft = Styled.div`
  width: 100%;
  background-color: #F2F3F4;
  clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 18%);
`;

const Text = Styled.p`
  width: 70%;
  margin: 0 0 0 50%;
  padding: 9rem 0 3rem 0;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #626567;
  line-height: 4rem;

  @media only screen and (max-width: 79em) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 63em) {
    font-size: 1.5rem;
    line-height: 3.5rem;
  }

  @media only screen and (max-width: 27em) {
    line-height: 3rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.3rem;
    line-height: 2.5rem;
  }

  @media only screen and (min-width: 115em) {
    font-size: 2.5rem;
    line-height: 4.5rem;
  }

  @media only screen and (min-width: 160em) {
    font-size: 3.5rem;
    line-height: 6rem;
    padding: 12rem 0 5rem 0;
  }
`;

const CardLeft = () => {
  return (
    <Card>
      <Profile src={ProfileImg} alt="Picture of me" />
      <TextContainerLeft>
        <Text>
          Thanks for taking the time to look around! I&#39;m a full stack
          developer with experience developing dynamic and responsive user
          interfaces as well as restful APIs. I&#39;m currently most interested
          in the world of web development and furthering my knowledge of the
          field.
        </Text>
      </TextContainerLeft>
    </Card>
  );
};

export default CardLeft;
