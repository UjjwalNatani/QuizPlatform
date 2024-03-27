import {combineReducers} from 'redux';
import addQuiz from './savequiz';

const rootReducer=combineReducers({
    addQuiz,
});

export default rootReducer;