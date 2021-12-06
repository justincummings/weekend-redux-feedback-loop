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

const understandReducer =  (state = [], action) => {
    if (action.type === "ADD_UNDERSTAND") {
        return action.payload;
    }
    return state;
};

const supportReducer =  (state = [], action) => {
    if (action.type === "ADD_SUPPORT") {
        return action.payload;
    }
    return state;
};

const commentReducer =  (state = [], action) => {
    if (action.type === "ADD_COMMENTS") {
        return action.payload;
    }
    return state;
};

const reviewReducer = (state = [], action) => {
    if(action.type === "CLEAR_FEEDBACK"){
        return
    }
}

const storeInstance = createStore(
    combineReducers({
        supportReducer,
        feelingReducer,
        understandReducer,
        commentReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();