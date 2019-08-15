import React from 'react';  
import './popup.css';
import {Button} from "../Button/Button";

export class KinshipPopup extends React.Component{
    render(){
        return(
            <div className='popup-background'>
                <div className='popup'>
                    <div className='poup-header'>
                        <Button title={"Go back"} secondary={true} onClick={this.props.closePopup} >
                            <i className="fas fa-arrow-left fa-lg"/>
                        </Button>
                        <Button title={"Close"} secondary={true} onClick={this.props.closePopup} >
                            <i className="fas fa-times fa-lg"/>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}