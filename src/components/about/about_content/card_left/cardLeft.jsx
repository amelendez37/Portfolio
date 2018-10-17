import React from "react";
import Styled from "styled-components";

import ProfileImg from "../../../../../public/images/profile.png";

const Card = Styled.div`
  width: 37%;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.25);
  text-align: center;

  @media only screen and (max-width: 55rem) {
    margin-bottom: 3.5rem;
    width: 55%;
  }

  @media only screen and (max-width: 44rem) {
    width: 65%;
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
  padding: 7rem 0 3rem 0;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #626567;
  line-height: 4rem;

  @media only screen and (max-width: 79rem) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 63rem) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 27rem) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 20rem) {
    font-size: .8rem;
  }
`;

const CardLeft = () => {
  return (
    <Card>
      <Profile src={ProfileImg} alt="Picture of me" />
      <TextContainerLeft>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only.
        </Text>
      </TextContainerLeft>
    </Card>
  );
};

export default CardLeft;
