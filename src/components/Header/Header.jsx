import React from 'react';
import {Button} from "../Button/Button";
import {Menu} from "../Menu/Menu";
import './header.css';

export const Header = (props) => (
    <header>
        <nav className="bx-navbar-container">
            <Button home={true} onClick={() => console.log("clicked")}>
                <Menu/>
            </Button>
            <h1>Bxemployeers</h1>
            <div className="bx-navbar-buttons">
                {props.children}
            </div>
        </nav>
    </header>
);
