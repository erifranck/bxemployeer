import React from 'react';
import './table.css';
import PropTypes from "prop-types";
import {Button} from "../Button/Button";

export const Table = (props) => (
    <table>
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
                        Object.values(objectValue).slice(1).map( (value, index) => (
                            <td key={index}>{value}</td>
                        ))
                    }
                    <td>
                        <Button isOption={true}>Details</Button>
                        <Button isOption={true}>Add kinship</Button>
                        <Button isOption={true} onClick={() => props.onDelete(objectValue.id)}>Delete</Button>
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
}
