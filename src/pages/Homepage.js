import React from "react";
import {Button} from "../components/Button/Button"
import { DropDownMenu } from "../components/Menu/dropDownMenu";
import './personApi.css';

export function Homepage(){
    return(
        <React.Fragment>
            
            <div className="bx-dashboard-wrapper">
                <div className="bx-dashboard-container">
                    
                    <img src={require("../images/PersonApi.png")} className="personApi">
                        
                    </img>
                    <Button home={true} style={{display: ''}}>
                        <DropDownMenu/>
                    </Button>
                    <div style={{color: "gray", position: 'absolute', bottom: 10, right: 20}}>Belatrix Software | "personAPI" v0.0.1 </div>
                        
                </div>
            </div>
        </React.Fragment>

    )
}