import React from "react";
import {Link} from 'react-router-dom';
import Container from "../components/Container/Container";

export function Homepage(){
    return(
        <React.Fragment>
            <div className="bx-dashboard-wrapper">
                <Link to="/about">About</Link> | <Link to="/employee-list">People</Link>
                   <div className="bx-dashboard-container">
                        <h1>Bxemployeers</h1>
                        <p>Fernando Balsas</p>
                        <p>Martin Mazagatti</p>
                        <p>Agustin Luna</p>
                        <p>Ivan Salomon</p>
                        <p>Daniel Brosio</p>
                        
                </div>
            </div>
        </React.Fragment>

    )
}