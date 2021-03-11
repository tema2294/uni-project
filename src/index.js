import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {ToastProvider} from "react-toast-notifications";
import {Provider} from "react-redux";
import store from "./store/store";

window.store = store
ReactDOM.render(
    <Provider store={store}>
        <ToastProvider autoDismiss
                       autoDismissTimeout={5000}
                       placement="top-right">
            <HashRouter>
                <App/>
            </HashRouter>
        </ToastProvider>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
