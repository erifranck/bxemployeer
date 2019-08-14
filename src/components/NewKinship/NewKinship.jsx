import React from 'react';
import './newKinship.css';

export class NewKinship extends React.Component {


    onChangeInput(inputName) {
        return (e) => {
            this.props.onChangeInput(inputName, e.target.value)
        }
    }

    render() {
        return (
            <div className="bx-kin-form-container">
                <form >
                    <div className="bx-kin-form-row">
                        <div className="bx-kin-form-elem">
                            <label>
                                Type:
                                <select
                                    name="type"
                                    onChange={this.onChangeInput('type')}
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
                        <div className="bx-kin-form-row">
                            <div className="bx-kin-form-elem">
                                <label>
                                    SourceEmployee:
                                <select
                                        name="SourceEmployee"
                                        onChange={this.onChangeInput('SourceEmployee')}
                                    >
                                        <option value="Father">Father</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="bx-kin-form-row">
                        <div className="bx-kin-form-elem">
                            <label>
                                TargetEmployee:
                                <select
                                    name="TargetEmployee"
                                    onChange={this.onChangeInput('TargetEmployee')}
                                >
                                    <option value="Father">Father</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

