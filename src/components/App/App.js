import React from 'react';
// import React,{Component} from 'react';
import {HashRouter,Switch,Route} from "react-router-dom";
import './App.scss';
import Home from "../Home/Home";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

function App() {
  return (
 <HashRouter>
   <Switch>
     <Route exact path ={"/"} component={Home}/>
     <Route path={"/logowanie"} component={Login}/>
       <Route path={"/rejestracja"} component={Registration}/>
       <Route path={"/wylogowanie"}component={Logout}/>

    </Switch>
 </HashRouter>
  );
}

export default App;
