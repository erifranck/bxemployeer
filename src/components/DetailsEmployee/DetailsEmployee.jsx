import React from 'react';
import {Button} from "../Button/Button";
import PropTypes from "prop-types";
import './detailsEmployee.css';
import {classNames} from "../../utils/classNames";

export class DetailsEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.showGender = this.showGender.bind(this);
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

    openKinships = () => {
        alert("Debe abrir otro modal con las kinships");
    };

    showGender(gender){
        if(gender === 'M') return 'Male';
        else if (gender === 'F') return 'Female';
        else return 'Other';
    };

    render() {
        const wrapperClass = classNames({
            "bx-details-wrapper": true,
            hide: !this.props.openDetails,
        });
        return (
            <div className={wrapperClass}>
                <div className="bx-details-container">
                    <div className="bx-details-header">
                        <Button title={"Go back"} secondary={true} onClick={this.closeDetails} >
                            <i className="fas fa-arrow-left fa-lg"/>
                        </Button>
                        <h2>Employee Details</h2>
                        <Button title={"Close"} secondary={true} onClick={this.closeDetails} >
                            <i className="fas fa-times fa-lg"/>
                        </Button>
                    </div>
                    <div className="bx-details-options">
                        <Button title={"Edit"} disabled={false} onClick={this.editDetails}>
                            Edit <i className="fas fa-edit fa-lg"/>
                        </Button>
                        <Button title={"List kinships"} disabled={false} onClick={this.openKinships}>
                            Kinships <i className="fas fa-users fa-lg"/>
                        </Button>
                    </div>
                    <div className="bx-details-form">
                        <strong>Name:</strong> <p>{this.props.objectValue.firstNames}</p>
                        <strong>LastName:</strong> <p>{this.props.objectValue.lastNames}</p>
                        <strong>Birth:</strong> <p>{this.props.objectValue.dateOfBirth}</p>
                        <strong>Doc. Type:</strong> <p>{this.props.objectValue.documentType}</p>
                        <strong>Doc. Number:</strong> <p>{this.props.objectValue.documentID}</p>
                        <strong>Gender:</strong> <p>{this.showGender(this.props.objectValue.gender)}</p>
                        <strong>Nationality:</strong> <p>{this.props.objectValue.nationality}</p>
                        <strong>Contact:</strong> <p>{this.props.objectValue.contact}</p>
                    </div>
                </div>
            </div>
        )
    }
}

DetailsEmployee.propTypes = {
    openDetails: PropTypes.bool.isRequired,
    onCloseDetails: PropTypes.func,
    onConfirmDetails: PropTypes.func,
    objectValue: PropTypes.object,
    onEdit: PropTypes.func,
};
