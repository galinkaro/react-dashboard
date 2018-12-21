import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { reduxForm } from 'redux-form';
import FormInput from '../../../form-components/input/Input';
import TextField from '@material-ui/core/TextField';

const projects = [
    {
        value: 'project-a',
        label: 'Project A'
    },
    {
        value: 'project-b',
        label: 'Project B'
    }];

const types = [
    {
        value: 'story',
        label: 'Story'
    },
    {
        value: 'task',
        label: 'Task'
    },
    {
        value: 'cr',
        label: 'Change request'
    },
    {
        value: 'defect',
        label: 'Defect'
    }];

class NewTicket extends React.Component {
    state = {
        project: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { handleSubmit, pristine, submitting, reset } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        select
                        label="Project"
                        required={true}
                        value={this.state.project}
                        onChange={this.handleChange('project')}
                        helperText="Please select your project"
                        margin="dense"
                        variant="outlined"
                    >
                        {projects.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <FormInput
                        select
                        name="Project"
                        required={true}
                        value={this.state.project}
                        onChange={this.handleChange('project')}
                        helperText="Please, select the project"
                    >
                        {projects.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </FormInput>
                    <FormInput
                        select
                        name="Ticket type"
                        required={true}
                        value={this.state.type}
                        onChange={this.handleChange('type')}
                        helperText="Please, select ticket type"
                    >
                        {types.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </FormInput>
                    <FormInput name="Title" placeholder="Title" required={true} />
                    <FormInput name="Story Points" placeholder="Title" type="number" />
                    <FormInput name="Description" placeholder="Title" multiline rows="6" />
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={submitting} onClick={reset}>
                        Cancel
                    </button>
                </div>
            </form>
        );
    }
}

NewTicket.propTypes = {
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    selectedValue: PropTypes.string,
};

export default reduxForm({
    form: 'new-ticket'
})(NewTicket);
