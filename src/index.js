import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App.js';
// import 'antd/dist/antd.css'
ReactDOM.render(
  <AppContainer>
    <Router>
      <App />
    </Router>
  </AppContainer>,
  document.getElementById('app')
);


