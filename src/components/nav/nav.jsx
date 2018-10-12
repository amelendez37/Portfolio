import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import Button from "../misc/button.jsx";

const Container = Styled.nav`
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
    <div onClick={props.handleFeaturedClick}>
      <Button text={"Featured Project"} />
    </div>
    <div onClick={props.handleContactClick}>
      <Button text={"Contact"} />
    </div>
  </Container>
);

Nav.propTypes = {
  handleAboutClick: PropTypes.func.isRequired,
  handleFeaturedClick: PropTypes.func.isRequired,
  handleContactClick: PropTypes.func.isRequired
};

export default Nav;
