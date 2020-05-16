import React from 'react';
import { Provider } from 'mobx-react'
import store from './store'
import './App.css';
import { HashRouter } from 'react-router-dom'
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            <Layout />
          </div>
        </HashRouter>

      </Provider>
    </div>
  );
}

export default App;
