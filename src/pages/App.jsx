import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "../redux/createStore";
import {PeopleList} from "./PeopleList";

import {Popup} from "../components/Popup/Popup";

import '../App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
        }
    }

    closePopup() {
        this.setState({showPopup : false});
    }

    openPopup() {
        this.setState({showPopup : true});
    }

    render () {
        return (
            <Provider store={store}>
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

            </Provider>
        );
    }
}

export default App;
