import React from 'react';
import ReactDOM from 'react-dom';
import App from "../App";
import store from "./store";
import {BrowserRouter} from "react-router-dom";

const renderApp = () => {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App state={store.getState()} addPost={store.addPost.bind(store)}/>
                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
};

export default renderApp;
