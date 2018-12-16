import React from 'react';
import _random from 'lodash/random';
import Avatar from 'react-avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import store from '../index';
import './Header.scss';

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

class Header extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render(){
        const { anchorEl } = this.state;

        return (
            <div className="header">
                <div className="header-left">
                    <div className="header__element">
                        <i className="material-icons">menu</i>
                    </div>
                    <div className="header__element">
                        <i className="material-icons">layers</i>
                        <span>JIRA</span>
                    </div>
                    <div className="header__element" onClick={this.handleClick}>
                        <span>Projects</span>
                        <i className="material-icons">arrow_drop_down</i>
                    </div>
                    <Menu className="submenu"
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={this.handleClose}>
                        <MenuItem onClick={this.handleClose}>Project A</MenuItem>
                        <MenuItem onClick={this.handleClose}>Project B</MenuItem>
                    </Menu>
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
                        <Avatar name="Galinka Rogach" size="30" round={true} textSizeRatio="1.75"
                                color={Avatar.getRandomColor('Galinka Rogach', customColors)}/>
                        <i className="material-icons">arrow_drop_down</i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
