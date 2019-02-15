import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Redirect } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    renderRedirect = () => {
        return <Redirect to="/dashboard"/>;
    };

    handleLogIn = () => {
        this.setState({ open: false });
        localStorage.setItem('isLoggedIn', 'true');

        this.renderRedirect();
    };

    render() {
        return (
            <div className="loginWrapper">
                <h2>Welcome to JIRA!</h2>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Please, log in to view dashboard
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please, enter your email and password.
                        </DialogContentText>
                        <TextField
                            id="name"
                            label="Email"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            id="name"
                            label="Password"
                            type="password"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleLogIn} color="primary">
                            Log in
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Login;
