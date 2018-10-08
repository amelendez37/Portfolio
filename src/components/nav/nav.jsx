import React from "react";
import PropTypes from "prop-types";
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

const Nav = props => (
  <Container>
    <div onClick={props.handleAboutClick}>
      <Button text={"About"} />
    </div>
    <Button text={"Featured Project"} />
    <Button text={"Contact"} />
  </Container>
);

Nav.propTypes = {
  handleAboutClick: PropTypes.func.isRequired
};

export default Nav;
