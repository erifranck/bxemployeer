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
            props.data.map((objectValue, index) => (
                <tr key={index}>
                    {
                        Object.values(objectValue).map( (value) => (
                            <td>{value}</td>
                        ))
                    }
                    <td>
                        <Button isOption={true}>Details</Button>
                        <Button isOption={true}>Add kinship</Button>
                        <Button isOption={true}>Delete</Button>
                    </td>
                </tr>
            ))
        }
        </tbody>
    </table>
);

Table.propTypes = {
    dataLabels: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
}
