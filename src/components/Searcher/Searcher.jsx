import React from 'react';
import { myRequest } from '../../services/mockEmployeersService';
import './searcher.css';

export class Searcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filtered: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
          filtered: this.props.items
        });
        myRequest().then((data) => {
            this.setState({data: data});
        })
      }
      
      componentWillReceiveProps(nextProps) {
        this.setState({
          filtered: nextProps.items
        });
      }

      handleChange(e) {
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
            
            currentList = this.state.data;

            newList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
         });
        } else {
            newList = this.props.items;
        }
        this.setState({
        filtered: newList
        });
    }
    
    render() {
        return (
            <div>
                <input 
                type="text"
                placeholder="Search..." 
                onChange={this.handleChange}
                value={this.state.value}
                />
            </div>
        )
    }
}
  
  export default Searcher;