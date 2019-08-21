import React from 'react';
import PropTypes from "prop-types";
import {Button} from "../Button/Button";
import './table.css';

export const Table = (props) => (

    <table className="bx-table-container">
        <caption className="bx-table-caption">Belatrix Employees</caption>
        <thead>
            <tr>
                {
                    props.dataLabels.map((dataLabel, index) => (
                        <th key={index}>
                            {dataLabel.label}
                            <Button title={"Sort by " + dataLabel.label} isOption={true} onClick={() => props.onClickColumn(dataLabel.key)}><i className="fas fa-sort"/></Button>
                        </th>
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
                        <Button title={"Details"} isOption={true} onClick={() => props.onDetails(objectValue)}><i className="fas fa-info-circle"/></Button>
                        <Button title={"Add kinship"} isOption={true} onClick={() => props.onAddKinship(objectValue.id)}><i class="fas fa-users"/></Button>
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
    onDetails: PropTypes.func.isRequired,
    onAddKinship: PropTypes.func.isRequired,
};
