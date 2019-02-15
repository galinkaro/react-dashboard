import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { reduxForm } from 'redux-form';
import FormInput from '../../../form-components/input/Input';
import './NewTicket.scss';

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

const users = [
    {
        value: 'me',
        label: 'Me'
    },
    {
        value: 'qa',
        label: 'some QA'
    },
    {
        value: 'fe',
        label: 'some FE'
    },
    {
        value: 'pm',
        label: 'PM'
    }];

class NewTicket extends React.Component {
    render() {
        const { handleSubmit, pristine, submitting, reset } = this.props;

        return (
            <form onSubmit={handleSubmit} className="new-ticket">
                <FormInput
                    select
                    name="project"
                    className="w70"
                    required={true}
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
                    name="type"
                    className="w70"
                    required={true}
                    helperText="Please, select ticket type"
                >
                    {types.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </FormInput>
                <FormInput name="title" placeholder="Title" required={true}/>
                <FormInput name="storyPoints"
                           className="w50"
                           placeholder="Title"
                           type="number"
                />
                <FormInput name="description" placeholder="Title" multiline rows="6"/>
                <FormInput select name="assignee" className="w70">
                    {users.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </FormInput>
                <div className="buttonsWrapper">
                    <Button type="submit" variant="contained" color="primary" disabled={pristine || submitting}>
                        Create
                    </Button>
                    <Button variant="contained" disabled={submitting} onClick={reset}>
                        Cancel
                    </Button>
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
