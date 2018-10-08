import React from "react";
import styled from "styled-components";

import Nav from "./nav.jsx";

const Container = styled.div``;

const Title = styled.h1`
  margin: 4% 0 4% 4%;
`;

const Header = () => (
  <Container>
    <Title>Aaron Melendez</Title>
    <Nav />
  </Container>
);

export default Header;
