import React from 'react';
import './Ticket.css';

const Ticket = () => (
    <div className="ticket">
        <div className="ticket__title">Title</div>
        <div className="ticket__info">
            <div className="ticket__type-icon">icon</div>
            <div className="ticket__id">ID</div>
            <div className="ticket__user-icon">user</div>
        </div>
    </div>
);

export default Ticket;
