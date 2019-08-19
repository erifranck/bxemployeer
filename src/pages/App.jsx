import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "../redux/createStore";
import {PeopleList} from "./PeopleList";
import {About} from "./About";
import {Homepage} from "./Homepage";

import '../App.css';

class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/employee-list" component={PeopleList} />
                    <Route path="/about" component={About}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
