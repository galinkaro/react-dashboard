import React from 'react';
import Avatar from 'react-avatar';
import _random from 'lodash/random';
import { connect } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import NewTicket from '../new-ticket/NewTicket';
import './Header.scss';

const customColors = [
    '#E55D4A',
    '#E88554',
    '#7D323B',
    '#4194A6',
    '#FFCC6B',
    '#F2855C',
    '#56657C',
    '#827a78',
    '#6f6a91'
];

class Header extends React.Component {
    state = {
        projects: null,
        profile: null,
        open: false
    };

    openProjects = event => {
        this.setState({ projects: event.currentTarget });
    };

    openProfile = event => {
        this.setState({ profile: event.currentTarget });
    };

    openNewTicketDialog = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({
            projects: null,
            profile: null,
            open: false
        });
    };

    onSubmit = (data) => {
        this.props.createNewTicket(data);
        this.handleClose();
    };

    render(){
        const { projects, profile } = this.state;

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
                    <div className="header__element" onClick={this.openProjects}>
                        <span>Projects</span>
                        <i className="material-icons">arrow_drop_down</i>
                    </div>
                    <Menu className="submenu"
                          anchorEl={projects}
                          open={Boolean(projects)}
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
                    <Button title="Create a new issue / bug / change request / etc" variant="outlined" color="inherit" size="small" onClick={this.openNewTicketDialog}>Create</Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        fullWidth={true}
                        aria-labelledby="simple-dialog-title">
                        <DialogTitle id="simple-dialog-title">New ticket</DialogTitle>
                        <NewTicket onSubmit={this.onSubmit} />
                    </Dialog>
                </div>
                <div className="header-right">
                    <input placeholder="Search" type="text"/>
                    <div className="header__element">
                        <i className="material-icons">settings</i>
                        <i className="material-icons">arrow_drop_down</i>
                    </div>
                    <div className="header__element" onClick={this.openProfile}>
                        <Avatar name="Galinka Rogach" size="30" round={true} textSizeRatio={1.75}
                                color={Avatar.getRandomColor('Galinka Rogach', customColors)}/>
                        <i className="material-icons">arrow_drop_down</i>
                    </div>
                    <Menu className="submenu"
                          anchorEl={profile}
                          open={Boolean(profile)}
                          onClose={this.handleClose}>
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>Log out</MenuItem>
                    </Menu>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createNewTicket:(data) => dispatch({
            type: 'ADD_NEW_TICKET',
            ticket: {
                title: data.title,
                status: 'To do',
                id: _random(100),
                type: data.type
            }
        })
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Header);
