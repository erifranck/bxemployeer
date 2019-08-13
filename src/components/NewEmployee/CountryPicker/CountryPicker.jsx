import React from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'

export class CountryPicker extends React.Component {
    constructor(props) {
      super(props)
  
      this.options = countryList().getData().filter( ({label}) => {
          return (
          label === "Argentina" ||
          label === "Chile" ||
          label === "Colombia" ||
          label === "Brazil" ||
          label === "Paraguay" ||
          label === "Peru" ||
          label === "United States" ||
          label === "Uruguay"
          )
      })
      
      this.state = {
        options: this.options,
        value: null,
      }
  
    }
  
    changeHandler = value => {
      this.setState({ value })
      this.props.onSelectCountry(value.label)
    }
  
    render() {
      return (
        <Select
          options={this.state.options}
          value={this.state.value}
          onChange={this.changeHandler}
        />
      )
    }
  }
  
  
  