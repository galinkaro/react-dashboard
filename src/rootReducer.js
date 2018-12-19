import { combineReducers } from 'redux';
import dashboard from './dashboard/reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    dashboard,
    form: formReducer
})
