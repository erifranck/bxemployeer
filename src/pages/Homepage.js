import React from "react";
import {Link} from 'react-router-dom';
import Container from "../components/Container/Container";

export function Homepage(){
    return(
        <React.Fragment>
            <Container>
                <p>This is the Homepage v1.0.0</p>
                <Link to="/about">About</Link> | <Link to="/employee-list">People</Link>
            </Container>
        </React.Fragment>
    )
}