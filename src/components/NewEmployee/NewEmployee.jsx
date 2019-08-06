import React from 'react';
import './newEmployee.css';  

export class NewEmployee extends React.Component {


    onChangeInput(inputName) { 
        return (e) => {
            this.props.onChangeInput(inputName, e.target.value)
        }
    }

    render() {
        return (
            <div className="bx-emp-form-container">
                <form >
                    <div className="bx-emp-form-row">
                        <div className="bx-emp-form-elem">
                            <label>
                                Name: 
                                <input 
                                    type="text" 
                                    required 
                                    name="first-name" 
                                    placeholder="First name" 
                                    onChange={this.onChangeInput('firstName')}
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
                                    onChange={this.onChangeInput('lastName')}
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
                                    required 
                                    name="date-of-birth"
                                    onChange={this.onChangeInput('dateOfBirth')}
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
                                    onChange={this.onChangeInput('docType')}
                                >
                                    <option value="-">-</option>
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
                                onChange={this.onChangeInput('docNumber')}
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
                                    onChange={this.onChangeInput('gender')}
                                >
                                    <option value="-">-</option>
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
                                    onChange={this.onChangeInput('nationality')}
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
                                    maxLength="18"
                                    onChange={this.onChangeInput('phone')}
                                />                            
                            </label>
                        </div>
                        <div className="bx-emp-form-elem">
                            <label>
                                E-mail: 
                                <input 
                                    type="email" 
                                    name="email" 
                                    onChange={this.onChangeInput('email')}

                                />
                            </label>
                        </div>


                    </div>
                </form>
            </div>
        
        );
    }
}

