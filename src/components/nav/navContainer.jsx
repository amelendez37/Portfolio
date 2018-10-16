import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Nav from "./nav.jsx";

class NavContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedBtn: "about" }; // about, featured, contact

    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
    this.handleFeaturedClick = this.handleFeaturedClick.bind(this);
  }

  handleAboutClick() {
    this.setState({ selectedBtn: "about" });
    this.props.history.push({
      pathname: "/"
    });
  }

  handleFeaturedClick() {
    this.setState({ selectedBtn: "featured" });
    this.props.history.push({
      pathname: "/featured"
    });
  }

  handleContactClick() {
    this.setState({ selectedBtn: "contact" });
    this.props.history.push({
      pathname: "/contact"
    });
  }

  render() {
    return (
      <Nav
        handleAboutClick={this.handleAboutClick}
        handleFeaturedClick={this.handleFeaturedClick}
        handleContactClick={this.handleContactClick}
        selectedBtn={this.state.selectedBtn}
      />
    );
  }
}

NavContainer.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(NavContainer);
