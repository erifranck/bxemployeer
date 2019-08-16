import React from 'react';
import {connect} from 'react-redux';

import './newKinship.css';

export class NewKinshipComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sourceDisabled: this.props.sourceEmployee !== null ,
            sourceEmployee: this.props.sourceEmployee,
            targetEmployee: '',
            kinship: ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    getSourceInfo(array) {
        var obj = array.filter( emp => emp.id ===  this.state.sourceEmployee )[0]
        return this.getEmployeeTag(obj)
    }    
    
    getEmployeeTag(emp) {
        return emp.firstNames + " " + emp.lastNames + " - " + emp.documentID
    }

    render() {
        return (
            <div className="bx-kin-form-container">
                <form >
                    <div className="bx-kin-form-row">
                        <div className="bx-kin-form-elem">
                            <label>
                                Source employee:
                            <select
                                    name="sourceEmployee"
                                    onChange={this.onChangeInput}
                                    value={this.state.sourceEmployee}
                                    disabled={this.state.sourceDisabled}
                                    >
                                    <option value={this.state.sourceEmployee}>{this.getSourceInfo(this.props.employeesData)}
                                    </option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="bx-kin-form-row">
                        <div className="bx-kin-form-elem">
                            <label>
                                Target employee:
                                <select
                                    name="targetEmployee"
                                    onChange={this.onChangeInput}
                                    value={this.state.targetEmployee}

                                >

                                {
                                    this.props.employeesData.map(emp =>
                                        <option key={emp.id} value={emp.id}>{this.getEmployeeTag(emp)}</option>
                                      )
                                };

                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="bx-kin-form-row">
                        <div className="bx-kin-form-elem">
                            <label>
                                Kiship:
                                <select
                                    name="kinship"
                                    onChange={this.onChangeInput}
                                    value={this.state.kinship}
                                >
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="Grandfather">Grandfather</option>
                                    <option value="Grandmother">Grandmother</option>
                                    <option value="Spouse">Spouse</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}


const mapStateToProps = (state) => ({
    employeesData: state.people.data,
    error: state.people.error
 });
 
 
 export const NewKinship = connect(mapStateToProps)(NewKinshipComponent);
 