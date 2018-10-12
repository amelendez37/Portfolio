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

  const handleFeaturedClick = () => {
    props.history.push({
      pathname: "/featured"
    });
  };

  const handleContactClick = () => {
    props.history.push({
      pathname: "/contact"
    });
  };

  return (
    <Nav
      handleAboutClick={handleAboutClick}
      handleFeaturedClick={handleFeaturedClick}
      handleContactClick={handleContactClick}
    />
  );
};

NavContainer.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(NavContainer);
