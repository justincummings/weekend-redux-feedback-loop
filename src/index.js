import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//importing redux logger, store, reducers & middleware
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feelingReducer =  (state = [], action) => {
    if (action.type === "ADD_FEELING") {
        return action.payload;
    }
    return state;
};

// const understandReducer = (state = [], action) => {

// }
// return state;

// const supportReducer = (state = [], action) => {

// }
// return state;

// const commentsReducer = (state = [], action ) => {

// }
// return state;

const storeInstance = createStore(
    combineReducers({
        supportReducer,
        feelingReducer,
        understandReducer,
        commentReducer

    }),
    applyMiddleware
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();