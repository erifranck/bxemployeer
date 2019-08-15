import React from 'react';
import './newKinship.css';

export class NewKinship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sourceDisabled: this.props.sourceEmployee !== null ,
            sourceEmployee: this.props.sourceEmployee,
            targetEmployee: '',
            kinship: ''
        }
    }

    onChangeInput(e) {
        this.setState({[e.target.name]: e.target.value})
        setTimeout( () => { console.log(this.state) }, 3000);

    }

    render() {
        return (
            <div className="bx-kin-form-container">
                <form >
                    <div className="bx-kin-form-row">
                        <div className="bx-kin-form-elem">
                            <label>
                                SourceEmployee:
                            <select
                                    name="sourceEmployee"
                                    onChange={this.onChangeInput.bind(this)}
                                    value={this.state.sourceEmployee}
                                    disabled={this.state.sourceDisabled}
                                    >
                                    <option value={this.state.sourceEmployee}>{this.state.sourceEmployee}</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="bx-kin-form-row">
                        <div className="bx-kin-form-elem">
                            <label>
                                TargetEmployee:
                                <select
                                    name="targetEmployee"
                                    onChange={this.onChangeInput.bind(this)}
                                    value={this.state.targetEmployee}

                                >
                                    <option value="Father">Father</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="1231">1231</option>
                                    <option value="5">5</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="bx-kin-form-row">
                        <div className="bx-kin-form-elem">
                            <label>
                                Type:
                                <select
                                    name="kinship"
                                    onChange={this.onChangeInput.bind(this)}
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

