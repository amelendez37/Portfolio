import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

const primaryColor = "#5DADE2";

const Container = Styled.button`
    color: #626567;
    font-size: 1.4rem;
    border: 1.5px solid #fff;
    padding: 1.2rem;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        border: 1.5px solid ${primaryColor};
        color: ${primaryColor};
    }
    &:focus {
        color: ${primaryColor};
        border: 1.5px solid ${primaryColor};
        outline: 0;
    }
`;

const Button = props => <Container>{props.text}</Container>;

Button.propTypes = {
  text: PropTypes.string
};

export default Button;
