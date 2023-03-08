import React from "react";
import PropTypes from "prop-types";
import { Button as MuiButtom } from "@mui/material";

const Button = ({ text, onClickAction }) => {
    return (
        <>
            <MuiButtom onClick={onClickAction} variant="text">
                {text}
            </MuiButtom>
        </>
    );
};

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    onClickAction: PropTypes.func.isRequired,
};

Button.defaultProps = {
    text: "Click me",
};
