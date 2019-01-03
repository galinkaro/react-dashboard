import React from 'react';
import { Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';

const FormInput = (props) => {
    return (
        <Field {...props} component={InputWrapper} />
    )
};

const InputWrapper = ({ input, meta, ...props}) => {
    return (
        <TextField {...props}
                   onChange={input.onChange}
                   label={input.name}
                   value={input.value}
                   variant="outlined"
                   margin="dense"
        />
    )
};

export default FormInput;
