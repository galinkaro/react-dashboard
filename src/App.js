import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import DetailedTicket from './detailed-ticket/DetailedTicket';
import './App.css';

const App = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div className="App">
                <Route exact path="/" render={() => (
                    <Redirect to="/dashboard"/>
                )}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/ticket/:id" component={DetailedTicket}/>
            </div>
        </Router>
    </Provider>
);

export default App;
