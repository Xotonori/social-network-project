import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
// import renderApp from './redux/renderApp'
import store from './redux/store'
import renderApp from './redux/renderApp'
// import {BrowserRouter} from "react-router-dom";

// import {addPost} from './redux/store'

// const renderApp = (store) => {
//     return (
//         <React.StrictMode>
//             <App state={store.getState()} addPost={store.addPost.bind(store)}/>
//         </React.StrictMode>
//     )
// };

store.subscribe(() => {
    renderApp();
});



// let renderAll = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App state={store.getState()} addPost={store.addPost.bind(store)}/>
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// };
//
// renderAll();

renderApp();





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
