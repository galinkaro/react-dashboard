import React from 'react';
import Header from '../dashboard/components/header/Header'

const DetailedTicket = (props) => {
    return (
        <div className="detailed-ticket-wrapper">
            <Header />
            <div>Ticket #{props.match.params.id}</div>
        </div>
    );
};

export default DetailedTicket;
