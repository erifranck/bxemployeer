import React from 'react';
import './searcher.css';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {searchPeople} from "../../redux/actions/peopleActions";

class SearchComponent extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           filtered: '',
       }
       this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({
          filtered: this.props.items
        });
    }
      
    componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
    }

    cleanInput() {
        this.setState({
            filtered: [],
        });
    }

    onSearch = (event) => {
        this.setState({filtered: event.target.value})
    }

    handleChange(event){
       this.props.searchPeople(event.target.value);
    };

    render() {
        return (
            <div>
                <input type="text" className="Searcher" onChange={this.handleChange}  placeholder="Search by document..."/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchPeople: (value) => dispatch(searchPeople(value)),
});

export const Searcher = connect(null,mapDispatchToProps)(SearchComponent)

SearchComponent.propTypes = {
   items: PropTypes.array.isRequired,
}
