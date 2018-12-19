import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import FormInput from "../../../form-components/input/Input";

class NewTicket extends React.Component {
    render() {
        const { handleSubmit, pristine, submitting, reset } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <div>
                    <FormInput name="title" placeholder="Title" />
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
    classes: PropTypes.object,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    selectedValue: PropTypes.string,
};

export default reduxForm({
    form: 'new-ticket'
})(NewTicket);
