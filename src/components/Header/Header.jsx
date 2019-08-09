import React from 'react';
import {Button} from "../Button/Button";
import {Menu} from "../Menu/Menu";


export const Header = (props) => (
    <header>
        <nav>
            <Button home={true} onClick={() => console.log("clicked")}>
                <Menu/>
            </Button>
            <div>
            <h1>Bxemployeers</h1>
            </div>
            
        </nav>
    </header>
);
