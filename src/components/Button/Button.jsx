import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import {classNames} from "../../utils/classNames";

export const Button = (props) =>  {
    const classes = classNames({
        "bx-button": true,
        primary: props.primary,
        secondary: props.secondary,
        "bx-button-options": props.isOption,
        "confirmButton": props.confirmButton,
        "addButton": props.addButton,
        "saveButton": props.saveButton,
        "editButton": props.editButton,
        "home": props.home,
        "addKinship": props.addKinship,
    });

    return !props.isLink ? (
        <button title={props.title} type={props.type} className={classes} onClick={props.onClick} >
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
    title: PropTypes.string,
    isOption: PropTypes.bool,
    confirmButton: PropTypes.bool,
    addButton: PropTypes.bool,
    saveButton: PropTypes.bool,
    home: PropTypes.bool,
    id: PropTypes.string,
    editButton: PropTypes.bool,
    addKinship: PropTypes.bool,
};
