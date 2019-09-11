import React from 'react';
// import React,{Component} from 'react';
import {HashRouter,Switch,Route} from "react-router-dom";
import './App.scss';
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import ThreeColumns from "../Home/ThreeColumns/ThreeColumns";

function App() {
  return (
 <HashRouter>
   <Navigation/>
   <Switch>
     <Route exact path ={"/"} component={Home}/>
    </Switch>
 </HashRouter>
  );
}

export default App;
