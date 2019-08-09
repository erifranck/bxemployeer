import React from 'react';
import './searcher.css';
import {connect} from 'react-redux';
import {sortPeopleBy} from "../../redux/actions/peopleActions";

class SortComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            key: props,
        };
        this.compareBy.bind(this);
        this.sortBy.bind(this);
    }
    
    
}

const mapDispatchToProps = (dispatch) => ({
    sortPeople: (key) => dispatch(sortPeopleBy(key)),
});