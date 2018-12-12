import React from 'react';
import Header from '../header/Header'
import Column from './components/column/Column'
import './Dashboard.css';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <Header />
                <div className="columns">
                    <Column />
                </div>
            </div>
        )
    }
}

export default Dashboard;
