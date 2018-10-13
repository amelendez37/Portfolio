import React from "react";
import Styled from "styled-components";

const Card = Styled.div`
  width: 37%;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.25);
  text-align: center;
`;

const TextRightTitle = Styled.p`
  font-size: 3rem;
  color: #626567;
  padding: 3rem 0 6rem 0;
`;

const TextContainerRight = Styled.div`
  width: 100%;
  background-color: #F2F3F4;
  clip-path: polygon(0 100%, 100% 50%, 100% 0, 0 0);
`;

const Skills = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-content: space-evenly;
`;

const Skill = Styled.div`
  margin: 3rem 0;
`;

const CardRight = () => {
  return (
    <Card>
      <TextContainerRight>
        <TextRightTitle>SKILLS</TextRightTitle>
      </TextContainerRight>
      <Skills>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>JavaScript</Skill>
        <Skill>Node</Skill>
        <Skill>MongoDB</Skill>
        <Skill>SQL</Skill>
        <Skill>Git</Skill>
        <Skill>Webpack</Skill>
      </Skills>
    </Card>
  );
};

export default CardRight;
