import React from 'react';  
import {NewEmployee} from '../NewEmployee/NewEmployee';

import './popup.css';  

export class Popup extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            docType: "-",
            docNum: "",
            gender: "-",
            nationality: "-",
            phone: "",
            email: "",
        }
    }

    onChangeInputForm = (key, value) => {
        this.setState({[key]: value});
        console.log (this.state)
    }

    validateFields(employeeData) {
        Object.values(employeeData).forEach( (x) => {
            console.log(x)
        })
    }
        
    onSaveEmployer = () => {

        console.log("onSaveEmployer")
        if(this.validateFields(this.state)) {
            this.props.saveEmployer(this.state);
        }
    }
    
    render() {
        return (  
            <div className='popup-background' /*onClick={this.props.closePopup}*/>  
                <div className='popup'>  
                    <div className='popup-content'>
                        <NewEmployee onChangeInput={this.onChangeInputForm} />
                    </div>   
                    <div className='popup-content'>
                        <button onClick={this.props.closePopup}>Cancel</button>
                        <button onClick={this.onSaveEmployer}>Save</button>
                    </div>
                </div>  
            </div>  
        )
    }  
}  

      

