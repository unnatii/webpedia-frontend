import {combineReducers} from 'redux'
import session from './session'

export default combineReducers({
    auth:session
});