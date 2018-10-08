import React from "react";
import styled from "styled-components";

import Button from "../misc/button.jsx";

const Container = styled.div`
  display: flex;
  > * {
    &:first-child {
      margin-left: 4%;
    }
    &:not(:first-child) {
      margin-left: 1%;
    }
  }
`;

const Nav = () => (
  <Container>
    <Button text={"About"} />
    <Button text={"Featured Project"} />
    <Button text={"Contact"} />
  </Container>
);

export default Nav;
