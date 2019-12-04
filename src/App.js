import React from 'react';
import { Route, Redirect, BrowserRouter as Router }  from 'react-router-dom';
import Header from './container/Header';
import {Footer} from './component/Footer';
import * as Color from './constant/Color';
import './App.css';

function App() {
  return (
    <div className="App">
     <style>
         @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
         @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
      </style>
       <header className="App-header">
      </header>
        <Router>
          <div style={{backgroundColor: Color.LIGHT_GRAY}}>
            <Route path="/" component={Header}/>
         </div> 
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
