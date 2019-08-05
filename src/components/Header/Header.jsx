import React from 'react';
import {Button} from "../Button/Button";
import {Menu} from "../Menu/Menu";
import { Searcher } from '../Searcher/Searcher';

export const Header = (props) => (
    <header>
        <nav>
            <Button home={true} onClick={() => console.log("clicked")}>
                <Menu/>
            </Button>
            <h1>Bxemployeers</h1>
            {/*
                <div>buscador</div>
                < div > button < /div>
                <div>button</div>
                <div>avatar</div>
            */}
            <Searcher/>
        </nav>
    </header>
);
