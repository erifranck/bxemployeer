import React from "react";
import {Button} from "../components/Button/Button"
import { DropDownMenu } from "../components/Menu/dropDownMenu";

export function Homepage(){
    return(
        <React.Fragment>
            
            <div className="bx-dashboard-wrapper">
                <div className="bx-dashboard-container">
                    <Button home={true} onClick={() => console.log("clicked")}>
                        <DropDownMenu/>
                    </Button>
                    <h1>Bxemployeers</h1>
                   
                        
                </div>
            </div>
        </React.Fragment>

    )
}