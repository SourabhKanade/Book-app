// redux/reducers/index.js
import { combineReducers } from 'redux';
import BookListReducer from './BookReducer';

const rootReducer = combineReducers({
   bookreducer: BookListReducer.reducer,
});

export default rootReducer;
