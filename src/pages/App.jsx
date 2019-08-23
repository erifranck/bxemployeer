import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "../redux/createStore";
import {PeopleList} from "./PeopleList";
import {KinshipList} from "./KinshipList";
import {About} from "./About";
import {Homepage} from "./Homepage";
import '../App.css';

class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/kinships" component={KinshipList} />
                    <Route path="/kinships/:id" component={KinshipList}/>
                    <Route path="/employee-list" component={PeopleList} />
                    <Route path="/about" component={About}/>
                </Router>
                <div style={{position: 'absolute', bottom: 10, right: 20, color: "gray"}}>Belatrix Software | "personAPI v1.0.0"</div>
            </Provider>
        );
    }
}

export default App;
