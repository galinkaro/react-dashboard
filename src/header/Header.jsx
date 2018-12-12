import React from 'react';
import _random from 'lodash/random';
import store from '../index';
import './Header.css';

function handleButtonClick() {
    store.dispatch({
        type: 'ADD_NEW_TICKET',
        ticket: {
            title: 'Create new page',
            status: 'To do',
            id: _random(100)
        }
    });
}

const Header = () => (
    <div className="header">
        <div className="header-left">
            <div className="header__element">
                <i className="material-icons">menu</i>
            </div>
            <div className="header__element">
                <i className="material-icons">layers</i>
                <span>JIRA</span>
            </div>
            <div className="header__element">
                <span>Projects</span>
                <i className="material-icons">arrow_drop_down</i>
            </div>
            <div className="header__element">
                <span>Issues</span>
                <i className="material-icons">arrow_drop_down</i>
            </div>
            <div className="header__element">
                <span>Boards</span>
                <i className="material-icons">arrow_drop_down</i>
            </div>
            <button onClick={handleButtonClick}>Create</button>
        </div>
        <div className="header-right">
            <input placeholder="Search" type="text"/>
            <div className="header__element">
                <i className="material-icons">settings</i>
                <i className="material-icons">arrow_drop_down</i>
            </div>
            <div className="header__element">
                <i className="material-icons">face</i>
                <i className="material-icons">arrow_drop_down</i>
            </div>
        </div>
    </div>
);

export default Header;
