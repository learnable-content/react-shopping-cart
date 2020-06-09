import { combineReducers } from 'redux';
import basketReducer from './basketReducer';

export default combineReducers({
    basketState: basketReducer
});