import React from 'react';
import Avatar from 'react-avatar';
import './Ticket.scss';

const customColors = [
    '#E55D4A',
    '#E88554',
    '#4194A6',
    '#82CCD9',
    '#FFCC6B',
    '#F2855C',
    '#7D323B',
    '#56657C',
    '#827a78',
    '#6f6a91'
];

const Ticket = (props) => (
    <div className="ticket">
        <div className="ticket__title">{props.title}</div>
        <div className="ticket__info">
            <div className="ticket__type-icon">{props.type}</div>
            <div className="ticket__id">{props.id}</div>
            <Avatar name="Galinka Rogach" size="30" round={true} textSizeRatio={1.75}
                    color={Avatar.getRandomColor('Galinka Rogach', customColors)}/>
        </div>
    </div>
);

export default Ticket;
