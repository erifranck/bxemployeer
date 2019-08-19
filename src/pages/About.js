import React from "react";
import {Link} from 'react-router-dom';
import Container from "../components/Container/Container";

export function About(){
    return(
        <React.Fragment>
            <Container>
                <p>This the About page v1.0.0</p>
                <Link to="/">Home</Link> 
                </Container>
        </React.Fragment>
    );
}


