import React from "react";
import Styled from "styled-components";

import NavContainer from "../nav/navContainer.jsx";

const Name = Styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 4% 0 4% 4%;

  @media only screen and (max-width: 27rem) {
    align-items: center;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

const Header = () => (
  <React.Fragment>
    <Name>
      <h1>Aaron</h1>
      <h1>Melendez</h1>
    </Name>
    <NavContainer />
  </React.Fragment>
);

export default Header;
