import React from 'react';  
import {NewEmployee} from '../NewEmployee/NewEmployee';

import './popup.css';  

export class Popup extends React.Component {  

    closePopup() {
        if(this.props.onClosePopup) {
            this.props.onClosePopup();
        }
    }

    saveEmployee() {

    }


    render() {  
        return (  
            <div className='popup-wrapper' /*onClick={this.props.closePopup}*/>  
                <div className='popup'>  
                    <div className='popup-content'>
                        <NewEmployee/>
                    </div>   
                    <div className='popup-content'>
                        <button onClick={this.props.closePopup}>Cancel</button>
                        <button onClick={this.props.saveEmployee}>Save</button>
                    </div>
                </div>  
            </div>  
        );  
    }  
}  
