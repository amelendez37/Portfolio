import React from "react";
import Styled from "styled-components";

import LeftCard from "./card_left/cardLeft.jsx";
import RightCard from "./card_right/cardRight.jsx";

const Cards = Styled.div`
  display: flex;
  justify-content: space-around;
  justify-content: space-evenly;
  margin: 24rem 0 16rem 0;

  @media only screen and (max-width: 68.75em) {
    margin-top: 12rem;
  }

  @media only screen and (max-width: 55em) {
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;
  }
`;

const AboutContent = () => {
  return (
    <React.Fragment>
      <Cards>
        <LeftCard />
        <RightCard />
      </Cards>
    </React.Fragment>
  );
};

export default AboutContent;
