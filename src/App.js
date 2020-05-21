import React,{Component} from 'react';
import { Provider } from 'mobx-react'
import store from './store'
import './App.css';
import { HashRouter } from 'react-router-dom'
import MyLayout from "./components/layout"
import LayOutTop from './components/layouttopdown'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            <LayOutTop />
          </div>
        </HashRouter>

      </Provider>
    </div>
  );
}

export default App;