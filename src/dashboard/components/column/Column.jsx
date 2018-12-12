import React from 'react';
import Ticket from '../ticket/Ticket';
import './Column.css';

const Column = (props) => (
    <div className="column">
        <p className="column__title">{props.title}</p>
        {props.tickets.map((item, index) => (
            <Ticket key={index} { ...item } />
        ))}
    </div>
);

export default Column;
