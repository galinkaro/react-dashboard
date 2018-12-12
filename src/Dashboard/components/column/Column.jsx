import React from 'react';
import Ticket from '../ticket/Ticket'
import './Column.css';

const Column = () => (
    <div className="column">
        <p className="column__title">Column title</p>
        <Ticket />
    </div>
);

export default Column;
