import React from 'react';
import {Button} from "../Button/Button";
import PropTypes from "prop-types";
import './modal.css';
import {classNames} from "../../utils/classNames";

export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    componentDidMount() {
        this.setState({show: this.props.openModal});
    }
    closeModal = () => {
        if(this.props.onCloseModal) {
            this.props.onCloseModal();
        }
    };
    onConfirm = () => {
        if(this.props.onConfirmModal) {
            this.props.onConfirmModal();
        }
    };
    render() {
        const wrapperClass = classNames({
            "bx-modal-wrapper": true,
            hide: !this.props.openModal,
        });
        return (
            <div className={wrapperClass}>
                <div className="bx-modal-container">
                    <div className="bx-modal-message">
                        <p>
                            {this.props.message}
                        </p>
                        <Button secondary={true} onClick={this.closeModal} >
                            <i className="fas fa-times fa-lg"/>
                        </Button>
                    </div>
                    <div className="bx-modal-footer">
                        <Button secondary={true} onClick={this.closeModal} >
                            Cancel
                        </Button>
                        <Button confirmButton={true} primary={true} onClick={this.onConfirm} >
                             {this.props.confirmLabel}
                        </Button>
                    </div>

                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    confirmLabel: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    openModal: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func,
    onConfirmModal: PropTypes.func,
};
