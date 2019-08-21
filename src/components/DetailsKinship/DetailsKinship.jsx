import React from 'react';
import {Button} from "../Button/Button";
import PropTypes from "prop-types";
import '../DetailsEmployee/detailsEmployee.css';
import {classNames} from "../../utils/classNames";

export class DetailsKinship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    componentDidMount() {
        this.setState({show: this.props.openDetails});
    }
    closeDetails = () => {
        if(this.props.onCloseDetails) {
            this.props.onCloseDetails();
        }
    };

    editDetails = () => {
        this.props.onEdit();
    };

    render() {
        const wrapperClass = classNames({
            "bx-details-wrapper": true,
            hide: !this.props.openDetails,
        });
        return (
            <div className={wrapperClass}>
                {this.props.kinshipArray.map((kinship) => 
                (<div className="bx-details-form">
                    <strong>Name:</strong> <p>{kinship.firstNames}</p>
                    <strong>LastName:</strong> <p>{kinship.lastNames}</p>
                    <strong>Kinships:</strong> <p>{kinship.kinships}</p>
                </div>))}
            </div>
        )
    }
}

DetailsKinship.propTypes = {
    openDetails: PropTypes.bool.isRequired,
    onCloseDetails: PropTypes.func,
    onConfirmDetails: PropTypes.func,
    kinshipArray: PropTypes.array.isRequired,
    onEdit: PropTypes.func,
};
