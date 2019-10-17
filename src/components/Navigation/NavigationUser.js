import React, {Component} from 'react';
import "./Navigation.scss"
import {NavLink} from "react-router-dom"
import "../../scss/settings/_colors.scss"


class NavigationUser extends Component {
    handleOnClick = (e) => {
        sessionStorage.clear()
    };

    render() {
        const selectedStyleLog = {
            border: "0.0625rem solid #FAD648",
            padding: "0.3rem 0.5rem"
        };


        let Login = <>
            <nav className={"nav"}>
                <ul className={"login"}>

                    <li><NavLink activeStyle={selectedStyleLog} to={"/logowanie"}>Zaloguj</NavLink></li>
                    <li><NavLink activeStyle={selectedStyleLog} to={"/rejestracja"}>Załóż konto</NavLink></li>
                </ul>
            </nav>
        </>;


        let Logout = <>
            <nav className={"nav"}>
                <ul className={"login"}>
                    <div className={"loginEmail"}>Cześć {sessionStorage.getItem("email")}</div>
                    <li><NavLink onClick={this.handleOnClick} activeStyle={selectedStyleLog}
                                 to={"/wylogowano"}>Wyloguj</NavLink></li>
                    <li><NavLink activeStyle={selectedStyleLog} to={"/oddaj-rzeczy"}>Oddaj Rzeczy</NavLink></li>
                </ul>
            </nav>
        </>;

        if (sessionStorage.getItem("email") == null) {
            return (
                Login
            )
        } else {
            return (
                Logout
            )
        }
    }
}


export default NavigationUser;