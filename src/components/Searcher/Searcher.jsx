import React from 'react';
import './searcher.css';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {searchPeople} from "../../redux/actions/peopleActions";
import {searchKinship} from "../../redux/actions/kinshipsActions";

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.ignoreArrows = this.ignoreArrows.bind(this);
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

    handleChange(event){
        let val = event.target.value.replace(/([^a-zA-z0-9]+)/g, s0 => '');
        this.props.searchPeople(val);
        this.props.searchKinship(val);
            if(isNaN(val)){
                if(!val.includes('\\') && !val.includes('[') && !val.includes(']'))
                    this.props.searchKinship(val);
            }
            else {
                this.props.searchPeople(val);
            }
    };

    ignoreArrows(event){
        if (event.keyCode === 38 || event.keyCode === 40 || event.keyCode === 190 || event.keyCode === 69 || event.keyCode === 109 || event.keyCode === 110 || event.keyCode === 187 || event.keyCode === 107) {
            event.preventDefault();
        }
    };

    render() {
        return (
            <div className="bx-searcher-container">
                { window.location.pathname === '/kinships/' ?
                    <input type="text" className="Searcher" onChange={this.handleChange}  placeholder="Search by employee source ..."/>
                    :
                    <input type="number" className="Searcher" onKeyDown={this.ignoreArrows} onChange={this.handleChange}  placeholder="Search by document ..."/>
                }
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
