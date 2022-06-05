import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router} from 'react-router-dom'
import store from "./Services/Store";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";

ReactDOM.render(
    <Router basename="/">
        <Provider store={store}>
            <App/>
            <ToastContainer />
        </Provider>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();
