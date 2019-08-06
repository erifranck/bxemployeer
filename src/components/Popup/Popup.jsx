import React from 'react';  
//import {NewEmployee} from '../NewEmployee/NewEmployee';
import {NewEmployeeWithFormik} from '../NewEmployee/NewEmployeeWithFormik'

import './popup.css';  

export class Popup extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            docType: "-",
            docNumber: "",
            gender: "-",
            nationality: "-",
            phone: "",
            email: "",
        }
    }

    onChangeInputForm = (key, value) => {
        this.setState({[key]: value});
    }

    onSaveEmployee = () => {

        if(this.validateFields(this.state)) {
            this.saveEmployee(this.state);
        }
    }

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
                    <div className="closeBtn" onClick={this.props.closePopup}> + </div>
                    <div className='popup-content'>
                        {/* <NewEmployee onChangeInput={this.onChangeInputForm} /> 
                        firstName="Dani" lastName="Brosio" dateOfBirth="1994-02-18" docType="DNI" docNumber="35886976" gender="M" nationality="Argentina" phone="-" email="danebrosio@gmail.com"
                    */}
                        <NewEmployeeWithFormik  />
                    </div> 
                </div>  
            </div>  
        )
    }  
}  

      
