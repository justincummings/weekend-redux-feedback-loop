import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//importing redux logger, store, reducers & middleware
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';

const feelingsReducer () => {
    
}





ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
