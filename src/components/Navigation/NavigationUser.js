import React,{Component} from 'react';
import "./Navigation.scss"
import {NavLink} from "react-router-dom"
import "../../scss/settings/_colors.scss"





class NavigationUser extends Component{

    render() {
        const selectedStyleLog = {
            border: "0.0625rem solid #FAD648",
            padding: "0.3rem 0.5rem"
        };

        const selectedStyleStart = {
            border: "0.0625rem solid #737373",
            padding: "0.3rem 1rem"
        };
        return(
            <>
                <nav className={"nav"}>
                    <ul className={"login"}>
                        <li><NavLink activeStyle={selectedStyleLog} to={"/logowanie"}>Zaloguj</NavLink></li>
                        <li><NavLink  activeStyle={selectedStyleLog} to={"/rejestracja"}>Załóż konto</NavLink></li>
                    </ul>
                    <ul className={"menu"}>
                        <li><NavLink  activeStyle={selectedStyleStart} exact to={"/"}>Start</NavLink></li>
                        <li><NavLink  activeStyle={selectedStyleStart} exact to={"/"}>O co chodzi?</NavLink></li>
                        <li><NavLink  activeStyle={selectedStyleStart} exact to={"/About"}>O Nas</NavLink></li>
                        <li><NavLink  activeStyle={selectedStyleStart} exact to={"/Organisation"}>Fundacja i organizacje</NavLink></li>
                        <li><NavLink  activeStyle={selectedStyleStart} exact to={"/Contact"}>Kontakt</NavLink></li>

                    </ul>
                </nav>
            </>
        )
    }
}


export default NavigationUser;