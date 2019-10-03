
import React,{Component} from 'react';
import {HashRouter,Switch,Route} from "react-router-dom";
import './App.scss';
import Home from "../Home/Home";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import FourSteps from "../Home/FourSteps/FourSteps";
import FormAfterLogin from "../FormAfterLogin/FormAfterLogin";
import About from "../Home/About/About";
import Organisation from "../Home/Organisation/Organisation";

class  App extends Component{

    render() {


        return (
            <HashRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/logowanie"} component={Login}/>
                    <Route path={"/rejestracja"} component={Registration}/>
                    <Route path={"/wylogowano"} component={Logout}/>
                    <Route path={"/FourSteps"} component={FourSteps}/>
                    <Route path={"/About"} component={About}/>
                    <Route path={"/Organisation"} component={Organisation}/>

                    <Route path={"/oddaj-rzeczy"} component={FormAfterLogin}/>

                </Switch>
            </HashRouter>
        );
    }
}

export default App;
