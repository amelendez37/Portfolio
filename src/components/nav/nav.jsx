import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import Button from "../misc/button.jsx";

const Container = Styled.nav`
  display: flex;
  margin: 6rem 0 6rem 4%;

  @media only screen and (max-width: 27em) {
    flex-direction: column;
    align-items: center;
    margin: 3rem 0 3rem 50%;
    transform: translateX(-50%);
  }
`;

const Nav = props => (
  <Container>
    <div onClick={props.handleAboutClick}>
      <Button text={"About"} selected={props.selectedBtn === "about"} />
    </div>
    <div onClick={props.handleFeaturedClick}>
      <Button
        text={"Featured Projects"}
        selected={props.selectedBtn === "featured"}
      />
    </div>
    <div onClick={props.handleContactClick}>
      <Button text={"Contact"} selected={props.selectedBtn === "contact"} />
    </div>
  </Container>
);

Nav.propTypes = {
  handleAboutClick: PropTypes.func.isRequired,
  handleFeaturedClick: PropTypes.func.isRequired,
  handleContactClick: PropTypes.func.isRequired,
  selectedBtn: PropTypes.string.isRequired
};

export default Nav;
