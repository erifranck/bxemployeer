import React from 'react';  
//import {NewEmployee} from '../NewEmployee/NewEmployee';
import {NewEmployeeWithFormik} from '../NewEmployee/NewEmployeeWithFormik'
import {Button} from '../Button/Button'
import './popup.css';  

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

    onChangeInputForm = (key, value) => {
        this.setState({[key]: value});
    };

    onSaveEmployee = () => {

        if(this.validateFields(this.state)) {
            this.saveEmployee(this.state);
        }
    };

    saveEmployee(empData) {

        var objToSend = {};

        objToSend["firstNames"] = empData.firstName;
        objToSend["lastNames"] = empData.lastName;
        objToSend["dateOfBirth"] = empData.dateOfBirth;
        objToSend["documentType"] = empData.docType;
        objToSend["documentID"] = empData.docNumber;
        objToSend["gender"] = empData.gender;
        objToSend["nationality"] = empData.nationality;
        objToSend["contact"] = empData.email;
        objToSend["relationships"] = [];      
    
        fetch('http://localhost:8080/personAPI/employees', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(objToSend)
          })
    }
    
    render() {
        return (  
            <div className='popup-background' /*onClick={this.props.closePopup}*/>  
                <div className='popup'>  
                    <div className="popup-header">
                        <div className="closeBtn" onClick={this.props.closePopup}> + </div>
                    </div>
                    <div className='popup-content'>
                        <NewEmployeeWithFormik initialValues={this.state}/>
                    </div> 
                </div>  
            </div>  
        )
    }  
}  

      

