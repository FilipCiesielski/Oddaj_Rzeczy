
import React,{Component} from 'react';
import {HashRouter,Switch,Route} from "react-router-dom";
import './App.scss';
import Home from "../Home/Home";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import FourSteps from "../Home/FourSteps/FourSteps";

class  App extends Component{
    componentWillUnmount() {
        localStorage.clear();
    }

    render() {


        return (
            <HashRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/logowanie"} component={Login}/>
                    <Route path={"/rejestracja"} component={Registration}/>
                    <Route path={"/wylogowano"} component={Logout}/>
                    <Route path={"/FourSteps"} component={FourSteps}/>

                </Switch>
            </HashRouter>
        );
    }
}

export default App;
