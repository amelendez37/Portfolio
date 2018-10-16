import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

// colors
const primaryColor = "#5DADE2";
const fillColor = "#FDFEFE";

const Container = Styled.button`
    color: #626567;
    background-color: ${fillColor};
    font-size: 1.9rem;
    border: 1.5px solid ${fillColor};
    padding: 1.2rem;
    border-radius: 5px;
    &:before {
        content: "+ ";
        color: ${fillColor};
    }
    &:hover {
        cursor: pointer;
        color: ${primaryColor};
    }
    &:focus {
        color: ${primaryColor};
        border: 1.5px solid ${primaryColor};
        outline: 0;
        &:before {
            color: ${primaryColor};
        }
    }
`;

const Button = props => <Container>{props.text}</Container>;

Button.propTypes = {
  text: PropTypes.string
};

export default Button;
