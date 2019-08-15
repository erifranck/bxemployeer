import React from 'react';
import './table.css';
import PropTypes from "prop-types";
import {Button} from "../Button/Button";

export const Table = (props) => (
    <table className="bx-table-container">
        <caption className="bx-table-caption">Belatrix Employees</caption>
        <thead>
            <tr>
                {
                    props.dataLabels.map((key, index) => (
                        <th key={index} >{key}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
        {
            props.data.map((objectValue) => (
                <tr key={objectValue.id}>
                    {
                        Object.values(objectValue).map( (value, index) => (
                            <td key={index}>{value}</td>
                        ))
                    }
                    <td>
                        <Button title={"Details"} isOption={true} onClick={() => props.onDetails(objectValue)}><i className="fas fa-info-circle"/></Button>
                        <Button title={"Add kinship"} isOption={true} onClick={() => props.onAddKinship(objectValue.id)}><i className="fas fa-user-plus"/></Button>
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
    onDetails: PropTypes.func.isRequired,
    onAddKinship: PropTypes.func.isRequired,
};