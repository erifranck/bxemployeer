import React from 'react';
import './searcher.css';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {searchPeople} from "../../redux/actions/peopleActions";
import {searchKinship} from "../../redux/actions/kinshipActions";

class SearchComponent extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           filtered: '',
       };
       this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({
          filtered: this.props.items
        });
    };
      
    componentWillReceiveProps(nextProps) {
        this.setState({
          filtered: nextProps.items
        });
    };

    cleanInput() {
        this.setState({
            filtered: [],
        });
    };

    onSearch = (event) => {
        this.setState({filtered: event.target.value})
    };

    handleChange(event){
        let val = event.target.value;
        if(isNaN(val)){
            this.props.searchKinship(val);
        }
        else {
            this.props.searchPeople(val);
        }
    };

    render() {
        return (
            <div className="bx-searcher-container">
                <input type="text" className="Searcher" onChange={this.handleChange}  placeholder="Search by document..."/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchPeople: (value) => dispatch(searchPeople(value)),
    searchKinship: (value) => dispatch(searchKinship(value)),
});

export const Searcher = connect(null,mapDispatchToProps)(SearchComponent);

SearchComponent.propTypes = {
   items: PropTypes.array.isRequired,
};
