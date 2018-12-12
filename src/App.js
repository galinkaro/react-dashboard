import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import DetailedTicket from './detailed-ticket/DetailedTicket';

const App = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div className="App">
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/ticket/:id" component={DetailedTicket}/>
            </div>
        </Router>
    </Provider>
);

export default App;
