import React,{Component} from 'react';
import { Provider } from 'mobx-react'
import store from './store'
import './App.css';
import { HashRouter } from 'react-router-dom'
import MyLayout from "./components/layout"
import Config from './config'
import LayOutTop from './components/layouttopdown'
function getLayOut(){
  if(Config.layoutTopDown){
    return <LayOutTop/>
  }
  else{
    return <MyLayout/>
  }
}
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            {getLayOut()}
          </div>
        </HashRouter>

      </Provider>
    </div>
  );
}

export default App;