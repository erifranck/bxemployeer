import React from 'react';
import './container.css';
import {Header} from "../Header/Header";

const Container = (props) => (
    <div className="bx-dashboard-container">
        <Header />
        {props.children}
    </div>
);
export default Container;
