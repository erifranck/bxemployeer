import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "../redux/createStore";
import {PeopleList} from "./PeopleList";
import {KinshipList} from "./KinshipList";
import '../App.css';

class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={PeopleList} />
                    <Route path="/kinships/" component={KinshipList} />
                </Router>
            </Provider>
        );
    }
}

export default App;
