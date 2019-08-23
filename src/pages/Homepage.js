import React from "react";
import {Button} from "../components/Button/Button"
import { DropDownMenu } from "../components/Menu/dropDownMenu";
import './homepage.css';

export function Homepage(){
    return(
        <React.Fragment>
            <div className="bx-dashboard-wrapper">
                <div className="bx-dashboard-container">
                    <div className="wrapper">
                        <div className="menu">
                            <li> <a href="/employee-list">Employees</a></li>
                            <li> <a href="/kinships">Kinships</a></li>
                            <li> <a href="/about">About</a></li>
                        </div>
                        <img src={require("../images/PersonApi.png")} className="logo"></img>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}