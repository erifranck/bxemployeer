import React from 'react';
import './searcher.css';

export class Searcher extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           value: "",
       }
    }
    cleanInput() {
        this.setState({
            value: "",
        });
    }
    render() {
        return (
            <div>
                <input type="text" />
                <span>x</span>
            </div>
        )
    }
}
