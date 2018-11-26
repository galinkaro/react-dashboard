import React from 'react';
import Header from '../header/Header'
import Ticket from './components/ticket/Ticket'
import './Dashboard.css';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <Header />
                <Ticket />
            </div>
        )
    }
}

export default Dashboard;
