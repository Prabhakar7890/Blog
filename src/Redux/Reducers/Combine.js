import { combineReducers } from 'redux';
import { BlogReducer} from './Reducer'

export const appstate= combineReducers({
     Blogvalues:BlogReducer
}) 