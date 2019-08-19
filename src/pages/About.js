import React from "react";
import {Link} from 'react-router-dom';
import Container from "../components/Container/Container";

export function About(){
    return(
        <React.Fragment>
            <div className="bx-dashboard-wrapper">
                <Link to="/">Home</Link> 
                   <div className="bx-dashboard-container">
                        <p>This the About page v1.0.0</p>
                        
                    </div>
            </div>
        </React.Fragment>
    );
}


