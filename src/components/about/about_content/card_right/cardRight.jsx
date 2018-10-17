import React from "react";
import Styled from "styled-components";

const textColor = "#626567";

const Card = Styled.div`
  width: 37%;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.25);
  text-align: center;

  @media only screen and (max-width: 55rem) {
    width: 55%;
    height: 60rem;
  }

  @media only screen and (max-width: 44rem) {
    width: 65%;
  }
`;

const TextRightTitle = Styled.p`
  font-size: 3.75rem;
  color: ${textColor};
  padding: 3rem 0 6rem 0;

  @media only screen and (max-width: 63rem) {
    font-size: 3.35rem;
  }
`;

const TextContainerRight = Styled.div`
  width: 100%;
  background-color: #F2F3F4;
  clip-path: polygon(0 100%, 100% 50%, 100% 0, 0 0);
`;

const Skills = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 1.5rem 1rem;
  justify-items: center;
  padding: 3rem 3rem .5rem 3rem;
  height: 66%;
`;

const Skill = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .5rem 0;
  width: 95%;
  height: 100%;
  font-size: 2.5rem;
  color: ${textColor};
  background-color: ${props => props.color};

  @media only screen and (max-width: 63rem) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 44rem) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 27rem) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 27rem) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 20rem) {
    font-size: 1rem;
  }
`;

const CardRight = () => {
  return (
    <Card>
      <TextContainerRight>
        <TextRightTitle>SKILLS</TextRightTitle>
      </TextContainerRight>
      <Skills>
        <Skill color={"#FADBD8"}>HTML</Skill>
        <Skill color={"#D6EAF8"}>CSS</Skill>
        <Skill color={"#FCF3CF"}>JavaScript</Skill>
        <Skill color={"#D5F5E3"}>Node</Skill>
        <Skill color={"#D4EFDF"}>MongoDB</Skill>
        <Skill color={"#FAE5D3"}>SQL</Skill>
        <Skill color={"#FDEBD0"}>Git</Skill>
        <Skill color={"#D4E6F1"}>Webpack</Skill>
      </Skills>
    </Card>
  );
};

export default CardRight;
