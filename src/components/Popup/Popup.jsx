import React from 'react';  
import {NewEmployeeWithFormik} from '../NewEmployee/NewEmployeeWithFormik';
import {popupContent} from '../Container/Container';
import {Button} from "../Button/Button";
import {NewKinship} from '../NewKinship/NewKinship';
import {getDate} from "../../utils/dateManagement";
import './popup.css';

export class Popup extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            firstName: "" || this.props.initialValues.firstNames,
            lastName: "" || this.props.initialValues.lastNames,
            dateOfBirth: "" || getDate(new Date(this.props.initialValues.dateOfBirth)),
            docType: ""|| this.props.initialValues.documentType,
            docNumber: "" || this.props.initialValues.documentID,
            gender: "" || this.props.initialValues.gender,
            nationality: "" || this.props.initialValues.nationality,
            phone: "" || this.props.initialValues.contact,
            email: "" || this.props.initialValues.contact,
            id: this.props.initialValues.id,
        }
    }
    
    onChangeInputForm = (key, value) => {
        this.setState({[key]: value});
    }
    
    render() {
        return (  
            <div className='popup-background'>
                <div className='popup'>  
                    <div className="popup-header">
                        <Button title={"Go back"} secondary={true} onClick={this.props.closePopup} >
                            <i className="fas fa-arrow-left fa-lg"/>
                        </Button>
                        <Button title={"Close"} secondary={true} onClick={this.props.closePopup} >
                            <i className="fas fa-times fa-lg"/>
                        </Button>
                    </div>
                    <div className='popup-content'> 
                        {
                            this.props.content === popupContent.NEW_EMPLOYEE ? 
                            <NewEmployeeWithFormik initialValues={this.state}/> :
                            null
                        }
                        {
                            this.props.content === popupContent.NEW_KINSHIP ? 
                            <NewKinship kinshipInit={this.props.kinshipInit} /> :
                            null
                        }
                    </div> 
                </div>  
            </div>  
        )
    }  
}  

      

