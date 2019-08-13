import React from 'react';  
//import {NewEmployee} from '../NewEmployee/NewEmployee';
import {NewEmployeeWithFormik} from '../../NewEmployee/NewEmployeeWithFormik'
import './popupNewKinship.css';  

export class PopupNewKinship extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            sourceEmployee: "",
            targetEmployee: "",
            kinshipType: "",
        }
    }

    onChangeInputForm = (key, value) => {
        this.setState({[key]: value});
    }

    onsaveKinship = () => {

        if(this.validateFields(this.state)) {
            this.saveKinship(this.state);
        }
    }

    saveKinship(kinData) {

        var objToSend = {};

        objToSend["idSourceEmployee"] = kinData.idSourceEmployee;
        objToSend["idTargetEmployee"] = kinData.idTargetEmployee;
        objToSend["type"] = kinData.type;      
    
        fetch('http://localhost:8080/personAPI/kinships', {
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
                        <NewEmployeeWithFormik/>
                    </div> 
                </div>  
            </div>  
        )
    }  
}  

      

