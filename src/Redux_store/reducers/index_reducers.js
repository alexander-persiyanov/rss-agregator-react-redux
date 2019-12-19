import {combineReducers} from 'redux';
import lists from './list_reducer.js';
import articles from './articles_reducer.js';




export default combineReducers (
    {
        lists,
        articles,
        
    }
)