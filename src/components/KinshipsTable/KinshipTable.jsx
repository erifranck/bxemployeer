import React from 'react';
import '../Table/table.css';
import PropTypes from "prop-types";
import {Button} from "../Button/Button";

export const KinshipTable = (props) => (
    <table className="bx-table-container">
        <caption className="bx-table-caption">Belatrix Employees - Kinships</caption>
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
                    {
                        Object.values(objectValue).slice(1).map( (value, index) => (
                            <td key={index}>{value}</td>
                        ))
                    }
                    <td>
                        <Button title={"Edit Kinship"} isOption={true} onClick={() => props.onEditKinship(objectValue) }><i className="fas fa-edit"/></Button>
                        <Button title={"Delete kinship"} isOption={true} onClick={() => props.onDeleteKinship(objectValue.id)}><i className="fas fa-trash-alt"/></Button>
                    </td>
                </tr>
            ))
        }
        </tbody>
    </table>
);

KinshipTable.propTypes = {
    dataLabels: PropTypes.array.isRequired,
    onDeleteKinship: PropTypes.func.isRequired,
    onEditKinship: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    editKinship: PropTypes.func.isRequired,
    onClickColumn: PropTypes.func.isRequired,
};