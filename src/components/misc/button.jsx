import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = props => <div>{props.text}</div>;

Button.propTypes = {
  text: PropTypes.string
};

export default Button;
