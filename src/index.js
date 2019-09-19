import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './Components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

// React/Redux stuff
import store from "./Redux/store";
import { Provider } from "react-redux";

// Used to import the MDBootstrap CSS - not yet implemented
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
    <Router>
    <Provider store={store}>        
    <App />
    </Provider>
    </Router>,
    document.getElementById("root")
);









