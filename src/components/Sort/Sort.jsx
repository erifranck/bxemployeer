/*import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {sortPeopleBy} from "../../redux/actions/peopleActions";

class SortComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            actual: this,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            actual: this.props.items
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
          actual: nextProps.items
        });
    }

    onSort = (event) => {
        this.setState({actual: event.target.key})
    }

    handleChange(event){
        this.props.sortPeopleBy(event.target.key);
    };
    render() {
        return (
            <div>
                {actual}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    sortPeopleBy: (key) => dispatch(sortPeopleBy(key)),
});

export const Sort = connect(null,mapDispatchToProps)(SortComponent)

SortComponent.propTypes = {
    items: PropTypes.array.isRequired,
}*/