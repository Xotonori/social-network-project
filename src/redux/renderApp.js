import React from 'react';
import ReactDOM from 'react-dom';
import App from "../App";
import {BrowserRouter} from "react-router-dom";

const renderApp = (store) => {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App
                        state={store.getState()}
                        dispatch={store.dispatch.bind(store)}
                    />
                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
};

export default renderApp;
