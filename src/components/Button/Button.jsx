import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import {classNames} from "../../utils/classNames";

export const Button = (props) =>  {
    const classes = classNames({
        "bx-button": true,
        primary: props.primary,
        secondary: props.secondary,
        "bx-button-options": props.isOption
    });
    return !props.isLink ? (
        <button className={classes} onClick={props.onClick} >
            {props.children}
        </button>
    ) : (
        <a href={props.link} className={classes} onClick={props.onClick} >
            {props.children}
        </a>
    );
};

Button.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    isLink: PropTypes.bool,
    link: PropTypes.string,
    onClick: PropTypes.func,
};
