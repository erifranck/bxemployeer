import React from "react";
import {Button} from "../components/Button/Button"
import { DropDownMenu } from "../components/Menu/dropDownMenu";
import './personApi.css';

export function Homepage(){
    return(
        <React.Fragment>
            
            <div className="bx-dashboard-wrapper">
                <div className="bx-dashboard-container">
                    <Button home={true}>
                        <DropDownMenu/>
                    </Button>
                    <img src={require("../images/PersonApi.png")} className="personApi"></img>
                    <div style={{position: 'absolute', bottom: 10, right: 20, color: "gray"}}>Belatrix Software | "personAPI v0.0.1"</div>
                        
                </div>
            </div>
        </React.Fragment>

    )
}