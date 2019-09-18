import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './Components/App.jsx';

// React/Redux stuff
import store from "./Redux/store";
import { Provider } from "react-redux";

// Used to import the MDBootstrap CSS - not yet implemented
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
    <Provider store={store}>        
    <App />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA








