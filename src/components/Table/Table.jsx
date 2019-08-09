import React from 'react';
import './table.css';
import PropTypes from "prop-types";
import {Button} from "../Button/Button";
import {sortPeopleBy } from '../../redux/actions/peopleActions';

export const Table = (props) => (

    <table className="bx-table-container">
        <caption className="bx-table-caption">Belatrix Employees</caption>
        <thead>
            <tr>
                {
                    props.dataLabels.map((dataLabel, index) => (
                        <th key={index} onClick= {() => props.onClickColumn(dataLabel.key)}>{dataLabel.label}</th>
                    ))
                }
                <th>Manage</th>
            </tr>
        </thead>
        <tbody>
        {
            props.data.map((objectValue) => (
                <tr key={objectValue.id}>
                    {   //person array : [id, name, lastname, doc type, doc number, gender, nationality, contacts...]
                        Object.values(objectValue).slice(1,3).concat(Object.values(objectValue).slice(5,6), Object.values(objectValue).slice(7,8)).map( (value, index) => (
                            <td key={index}>{value}</td>
                        ))
                    }
                    <td>
                        <Button title={"Details"} isOption={true}><i className="fas fa-info-circle"/></Button>
                        <Button title={"Add kinship"} isOption={true}><i className="fas fa-user-plus"/></Button>
                        <Button title={"Delete employee"} isOption={true} onClick={() => props.onDelete(objectValue.id)}><i className="fas fa-trash-alt"/></Button>
                    </td>
                </tr>
            ))
        }
        </tbody>
    </table>
);

Table.propTypes = {
    dataLabels: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    onClickColumn: PropTypes.func.isRequired,
}
