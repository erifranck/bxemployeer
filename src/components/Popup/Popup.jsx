import React from 'react';  
import {NewEmployeeWithFormik} from '../NewEmployee/NewEmployeeWithFormik'
import './popup.css';
import {Button} from "../Button/Button";

export class Popup extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            firstName: "" || this.props.initialValues.firstNames,
            lastName: "" || this.props.initialValues.lastNames,
            dateOfBirth: "" || this.props.initialValues.dateOfBirth,
            docType: ""|| this.props.initialValues.documentType,
            docNumber: "" || this.props.initialValues.documentID,
            gender: "" || this.props.initialValues.gender,
            nationality: "" || this.props.initialValues.nationality,
            phone: "" || this.props.initialValues.contact,
            email: "" || this.props.initialValues.contact,
            id: this.props.initialValues.id,
        }
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
                        <NewEmployeeWithFormik initialValues={this.state}/>
                    </div> 
                </div>  
            </div>  
        )
    }  
}  

      

