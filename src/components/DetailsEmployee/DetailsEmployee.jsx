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
        }
    }
    componentDidMount() {
        this.setState({show: this.props.openDetails});
        document.getElementById('confirmEditDetails').disabled = true;
    }
    closeDetails = () => {
        if(this.props.onCloseDetails) {
            document.getElementById('confirmEditDetails').disabled = true;
            this.props.onCloseDetails();
        }
    };
    onConfirm = () => {
        if(this.props.onConfirmDetails) {
            this.props.onConfirmDetails();
        }
        document.getElementById('confirmEditDetails').disabled = true;
    };

    editDetails = () => {
        document.getElementById('confirmEditDetails').disabled = false;
    };

    openKinships = () => {
        document.getElementById('confirmEditDetails').disabled = true;
        alert("Debe abrir otro modal con las kinships");
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
                        <p>Name: {this.props.objectValue.firstNames}</p>
                        <p>LastName: {this.props.objectValue.lastNames}</p>
                        <p>Birth: {this.props.objectValue.dateOfBirth}</p>
                        <p>Doc. Type: {this.props.objectValue.documentType}</p>
                        <p>Doc. Number: {this.props.objectValue.documentID}</p>
                        <p>Gender: {this.props.objectValue.gender}</p>
                        <p>Nationality: {this.props.objectValue.nationality}</p>
                        <p>Contact: {this.props.objectValue.contact}</p>
                    </div>
                    <div className="bx-details-footer">
                        <Button id="confirmEditDetails" primary={true} onClick={this.onConfirm} >Confirm changes</Button>
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
};
