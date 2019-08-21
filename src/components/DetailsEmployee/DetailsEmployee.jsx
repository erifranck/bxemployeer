import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from "../Button/Button";
import PropTypes from "prop-types";
import './detailsEmployee.css';
import {classNames} from "../../utils/classNames";
import {DetailsKinship} from "../DetailsKinship/DetailsKinship";
import {getKinshipsFromPeople} from "../../services/kinshipsService"

class DetailsEmployeeComponent extends React.Component {
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
        this.setState({
            tab: 'Details',
            kinships: [],
        })
        if(this.props.onCloseDetails) {
            this.props.onCloseDetails();
        }
    };

    editDetails = () => {
        this.props.onEdit();
    };

    openKinships = () => {
        this.props.history.push('/kinships/' + this.props.objectValue.id)
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
                            <strong>Gender:</strong> <p>{this.props.objectValue.gender}</p>
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

export const DetailsEmployee = withRouter(DetailsEmployeeComponent);