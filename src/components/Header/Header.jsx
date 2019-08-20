import React from 'react';
import {Button} from "../Button/Button";
import {Menu} from "../Menu/Menu";
import { DropDownMenu } from '../Menu/dropDownMenu';

export const Header = (props) => (
    <header>
        <nav>
            <Button home={true} onClick={() => console.log("clicked")}>
                <DropDownMenu/>
            </Button>
            <h1>Bxemployeers
                {props.children}
            </h1>
        </nav>
    </header>
);
