import React from 'react';
import { Field } from 'redux-form';
import Input from '@material-ui/core/Input';

const FormInput = (props) => {
    return (
        <Field {...props} component={InputWrapper} />
    )
};

const InputWrapper = ({ input, meta, ...props}) => {
    return (
        <Input {...props} onChange={input.onChange} />
    )
};

export default FormInput;
