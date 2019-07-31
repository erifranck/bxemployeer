import React from 'react';
import './newEmployee.css';  

export class NewEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firtsName: "",
            lastName: "",
            dateOfBirth: "",
            docType: "",
            docNum: "",
            gender: "",
            nationality: "",
            phone: "",
            email: "",
        }
    }

    saveEmployee() {
        console.log(this.state);

    }

    render() {
        return (
            <div className="bx-emp-form-container">
                <div className="bx-emp-form-row">
                    <div className="bx-emp-form-elem">
                        <label>
                            Name: 
                            <input 
                                type="text" 
                                required 
                                name="first-name" 
                                placeholder="First name" 
                                value={this.state.firtsName}
                                onChange={
                                    e => this.setState({ firtsName : e.target.value})
                                }
                            />
                        </label>
                    </div>
                    <div className="bx-emp-form-elem">
                        <label >
                            <input 
                                type="text" 
                                required 
                                name="last-name" 
                                placeholder="Last name"
                                value={this.state.lastName}
                                onChange={
                                    e => this.setState({ lastName : e.target.value})
                                }
                            />
                        </label>
                    </div>
                </div>
                <div className="bx-emp-form-row">
                    <div className="bx-emp-form-elem">
                        <label>
                            Date of birth: 
                            <input 
                                type="date" 
                                required name="date-of-birth"
                                value={this.state.dateOfBirth}
                                onChange={
                                    e => this.setState({ dateOfBirth : e.target.value})
                                }
                            />
                        </label>
                    </div>
                </div>
                <div className="bx-emp-form-row">
                    <div className="bx-emp-form-elem">
                        <label>
                            Document: 
                            <select 
                                name="doc-type" 
                                value={this.state.docType}
                                onChange={
                                    e => this.setState({ docType : e.target.value})
                                }
                            >
                                <option value="DNI">DNI</option>
                                <option value="LC">LC</option>
                            </select>
                        </label>
                    </div>    
                    <div className="bx-emp-form-elem">
                        <label>
                        <input 
                            type="number" 
                            required 
                            name="doc-num" 
                            value={this.state.docNum}
                            onChange={
                                e => this.setState({ docNum : e.target.value})
                            }
                        />                            
                        </label>
                    </div> 
                </div>
                <div className="bx-emp-form-row">
                    <div className="bx-emp-form-elem">
                        <label>
                            Gender: 
                            <select 
                                name="gender"
                                value={this.state.gender}
                                onChange={
                                    e => this.setState({ gender : e.target.value})
                                }
                            >
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="O">Other</option>
                            </select>
                        </label>
                    </div>
                    <div className="bx-emp-form-elem">
                        <label>
                            Nationality: 
                            <select 
                                name="nationality"
                                value={this.state.nationality}
                                onChange={
                                    e => this.setState({ nationality : e.target.value})
                                }
                            >
                                <option value="-">-</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Chile">Chile</option>
                                <option value="Uruguay">Uruguay</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="bx-emp-form-row">
                    <div className="bx-emp-form-elem">
                        <label>
                            Phone: 
                            <input 
                                type="tel" 
                                name="telphone" 
                                placeholder="(+88) 888 8888 8888" 
                                pattern="(+[0-9]{2})? [0-9]{3} [0-9]{4}-[0-9]{4}" 
                                maxLength="14"
                                value={this.state.phone}
                                onChange={
                                    e => this.setState({ phone : e.target.value})
                                }
                            />                            
                        </label>
                    </div>
                    <div className="bx-emp-form-elem">
                        <label>
                            E-mail: 
                            <input 
                                type="email" 
                                name="email" 
                                value={this.state.email}
                                onChange={
                                    e => this.setState({ email : e.target.value})
                                }
                            />
                        </label>
                    </div>


                </div>
                <button onClick={this.saveEmployee.bind(this)}>Add</button>
            </div>
        
        );
    }
}

