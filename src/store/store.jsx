import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { videoReducer } from './video.Management';
import { userStudentReducer } from './userStudent.Management';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    combineReducers({
        video: videoReducer,
        userStudent: userStudentReducer
    }),
    composeEnhancers(
        applyMiddleware( thunk )
    )
);