import React from 'react';  
import {NewEmployee} from '../NewEmployee/NewEmployee';
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
        // this.validateFields();
    }

    validateFields(empData) {
        console.log(empData);
        var today = new Date();
        var minDate = new Date(1800,1,1);

        const NameRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        const EmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const PhoneRegEx = /^(([+]{1}[0-9]{2}|0)[0-9]{9})$/

        if (NameRegEx.test(empData.firstName)) {
            console.log("Valid first name");
        } else {
            console.log("Invalid first name");
            return false;
        }

        if (NameRegEx.test(empData.lastName)) {
            console.log("Valid last name");
        } else {
            console.log("Invalid last name");
            return false;
        }

 /*        if ( empData.dateOfBirth < today) {
            console.log("Valid date of birth");
        } else {
            console.log("Invalid date of birth");
            return false;

        } */

        if ( empData.docType !== "-") {
            console.log("Valid docType");
        } else {
            console.log("Invalid docType");
            return false;

        }
        console.log(empData.docNumber);

        if ( Number(empData.docNumber > 0) ) {
            console.log("Valid docNum");
        } else {
            console.log("Invalid docNum");
            return false;
        }

        if ( empData.gender !== "-") {
            console.log("Valid gender");
        } else {
            console.log("Invalid gender");
            return false;

        }
        
        if ( empData.nationality !== "-") {
            console.log("Valid nationality");
        } else {
            console.log("Invalid nationality");
            return false;

        }
        
/* 
        if (PhoneRegEx.test(empData.phone)) {
            console.log("Valid phone");
        } else {
            console.log("Invalid phone");
            return false;

        } */

        if (EmailRegEx.test(empData.email)) {
            console.log("Valid e-mail");
        } else {
            console.log("Invalid e-mail");
            return false;

        }
        return true;

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

      

