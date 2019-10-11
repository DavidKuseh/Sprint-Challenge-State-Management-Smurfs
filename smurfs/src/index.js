// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import * as reducer from './state/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const mainReducer = combineReducers({
	state: reducer.smurfsReducer
});

export const store = createStore(mainReducer,
    {},
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
    ),
);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);