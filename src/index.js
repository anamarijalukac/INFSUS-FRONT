import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {reducers} from './reducers';

import App from './App.js';
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));