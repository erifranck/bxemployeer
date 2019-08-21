import React from 'react';
import {connect} from 'react-redux';
import {createKinshipRequest} from "../../redux/actions/kinshipsActions";
import {getPeopleRequest} from "../../redux/actions/peopleActions";
import './newKinship.css';

class NewKinshipComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sourceDisabled: this.props.kinshipInit.sourceEmployee !== null ,
            targetDisabled: this.props.kinshipInit.targetEmployee !== null ,
            sourceEmployee: this.props.kinshipInit.sourceEmployee || '',
            targetEmployee: this.props.kinshipInit.targetEmployee || '',
            kinship:        this.props.kinshipInit.kinship || ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getPeopleRequest();
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


    onSubmit(e) {
        e.preventDefault()     
        this.props.createKinship(this.state)
    }
    

    render() {
        return (
            <div className="bx-kin-form-container">
                <form onSubmit={this.onSubmit}>
                    <div className="bx-kin-form-row">
                        <div className="bx-kin-form-elem">
                            <label>
                                Source employee:

                                <select required
                                    name="sourceEmployee"
                                    onChange={this.onChangeInput}
                                    value={this.state.sourceEmployee}
                                    disabled={this.state.sourceDisabled}
                                >
                                        <option value="">Select One...</option>
                                    {
                                        this.props.employeesData.filter( emp => emp.id !== this.state.targetEmployee ).map(emp =>
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
                                Target employee:
                                <select required
                                    name="targetEmployee"
                                    onChange={this.onChangeInput}
                                    value={this.state.targetEmployee}
                                    disabled={this.state.targetDisabled}

                                >
                                        <option value="">Select One...</option>
                                {
                                    this.props.employeesData.filter( emp => emp.id !== this.state.sourceEmployee ).map(emp =>
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
                                <select required
                                    name="kinship"
                                    onChange={this.onChangeInput}
                                    value={this.state.kinship}
                                >
                                    <option value="">Select One...</option>
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

                    <input type="submit" value="Save kinship"></input>
                </form>
            </div>

        );
    }
}


const mapStateToProps = (state) => ({
    employeesData: state.people.data,
    error: state.people.error
 });
 
 
const mapDispatchToProps = (dispatch) => ({
    createKinship: (payload) => dispatch(createKinshipRequest(payload)),
    getPeopleRequest: () => dispatch(getPeopleRequest()),
});

 
 export const NewKinship = connect(mapStateToProps,mapDispatchToProps)(NewKinshipComponent);
 