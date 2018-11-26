import React from 'react';
import './Header.css';

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
            <button>Create</button>
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
