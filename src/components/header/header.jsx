import React from "react";
import styled from "styled-components";

import NavContainer from "../nav/navContainer.jsx";

const Title = styled.h1`
  margin: 4% 0 4% 4%;
  font-size: 4.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Header = () => (
  <React.Fragment>
    <Title>Aaron Melendez</Title>
    <NavContainer />
  </React.Fragment>
);

export default Header;
