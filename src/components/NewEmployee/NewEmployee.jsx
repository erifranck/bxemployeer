import React from 'react';
import './newEmployee.css';  

export class NewEmployee extends React.Component {

    render() {
        return (
            <div className="bx-emp-form-container">
                <form autoComplete="off">
                    <div className="bx-emp-form-row">
                        <div className="bx-emp-form-elem">
                            <label>
                                Name: 
                                <input type="text" required name="first-name" placeholder="First name"/>
                            </label>
                        </div>
                        <div className="bx-emp-form-elem">
                            <label >
                                <input type="text" required name="last-name" placeholder="Last name"/>
                            </label>
                        </div>
                    </div>
                    <div className="bx-emp-form-row">
                        <div className="bx-emp-form-elem">
                            <label>
                                Date of birth: 
                                <input type="date" required name="date-of-birth" />
                            </label>
                        </div>
                    </div>
                    <div className="bx-emp-form-row">
                        <div className="bx-emp-form-elem">
                            <label>
                                Document: 
                                <select name="doc-type">
                                    <option value="DNI">DNI</option>
                                    <option value="LC">LC</option>
                                </select>
                            </label>
                        </div>    
                        <div className="bx-emp-form-elem">
                            <label>
                            <input type="number" required name="doc-number" />
                            </label>
                        </div> 
                    </div>
                    <div className="bx-emp-form-row">
                        <div className="bx-emp-form-elem">
                            <label>
                                Gender: 
                                <select name="gender">
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Other</option>
                                </select>
                            </label>
                        </div>
                        <div className="bx-emp-form-elem">
                            <label>
                                Nationality: 
                                <select name="nationality">
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
                                <input type="tel" name="telphone" placeholder="(+88) 888 8888 8888" pattern="(+[0-9]{2})? [0-9]{3} [0-9]{4}-[0-9]{4}" maxLength="14" required/>                            </label>
                        </div>
                        <div className="bx-emp-form-elem">
                            <label>
                                E-mail: 
                                <input type="email" name="email" />
                            </label>
                        </div>


                    </div>
                </form>

            </div>
        
        );
    }
}

