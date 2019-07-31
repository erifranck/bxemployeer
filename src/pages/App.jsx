import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {myRequest} from "../services/mockEmployeersService";
import {PeopleList} from "./PeopleList";
import {PeopleProvider} from "../Context/People";
import {Popup} from "../components/Popup/Popup";

import '../App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
        }
    }

    saveEmployee() {

    }

    closePopup() {
        this.setState({showPopup : false});
    }

    openPopup() {
        this.setState({showPopup : true});
    }

    render () {
        return (
            <PeopleProvider>
                <Router>
                    <Route path="/" component={PeopleList} />
                </Router>

                <hr></hr>

                <button onClick={this.openPopup.bind(this)}>Add Employee</button>
                
                {
                    this.state.showPopup ?
                        <Popup 
                            closePopup={this.closePopup.bind(this)}>
                        </Popup>
                    : null
                }
                </PeopleProvider>

        );
    }
}

export default App;
