import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {myRequest} from "../services/mockEmployeersService";
import {PeopleList} from "./PeopleList";
import '../App.css';
import {PeopleProvider} from "../Context/People";


class App extends React.Component {
    render () {
        return (
            <PeopleProvider>
                <Router>
                    <Route path="/" component={PeopleList} />
                </Router>
            </PeopleProvider>
        );
    }
}

export default App;
