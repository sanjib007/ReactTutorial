import {combineReducers} from 'redux';
import geams from './geamsReducer';
import {tagData} from './tabReducer'



export default combineReducers({
    geams, tagData
})