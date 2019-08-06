import React from 'react';
import {myRequest} from "../services/mockEmployeersService";

const PeopleContext = React.createContext({data: []});

export class PeopleProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getList();
    }
    getList = () => {
        myRequest().then((data) => {
            this.setState({data: data});
        })
    };
    render() {
        return (
           <PeopleContext.Provider value={{...this.state, getList: this.getList }}>
               {this.props.children}
           </PeopleContext.Provider>
        );
    }
}

export const PeopleConsumer = PeopleContext.Consumer;
