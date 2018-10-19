import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

// colors
const primaryColor = "#5DADE2";
const fillColor = "#FDFEFE";

const Container = Styled.button`
    color: ${props => (props.selected ? primaryColor : "#626567")};
    background-color: ${fillColor};
    font-size: 1.9rem;
    padding: 1.2rem;
    border-radius: 5px;
    outline: 0;
    border: ${props =>
      props.selected ? `1.5px solid ${primaryColor}` : fillColor};
    &:before {
        color: ${props => (props.selected ? primaryColor : fillColor)};
    }
    &:hover {
        cursor: pointer;
        color: ${primaryColor};
    }

    @media only screen and (min-width: 120em) {
      font-size: 2.5rem;
    }

    @media only screen and (min-width: 120em) {
      font-size: 4rem;
      padding: 1.8rem;
    }
`;

const Button = props => (
  <Container selected={props.selected}>{props.text}</Container>
);

Button.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool
};

export default Button;
