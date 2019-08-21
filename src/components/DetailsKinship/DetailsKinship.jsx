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
        console.log(this.props.kinshipArray);
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
                this.props.kinshipArray.map((kinship) =>
                (<div className="bx-details-form">
                    <strong>Source Name:</strong> <p>{kinship.emlpoyeeSourceNames}</p>
                    <strong>Type:</strong> <p>{kinship.type}</p>
                    <strong>Target Name:</strong> <p>{kinship.employeeTargetNames}</p>
                </div>))

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
