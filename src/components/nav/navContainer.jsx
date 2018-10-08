import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Nav from "./nav.jsx";

const NavContainer = props => {
  const handleAboutClick = () => {
    props.history.push({
      pathname: "/"
    });
  };

  return <Nav handleAboutClick={handleAboutClick} />;
};

NavContainer.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(NavContainer);
