import React, {Component} from 'react';
import "./FormAfterLogin.scss"
import Navigation from "../Navigation/Navigation";
import {Link, NavLink} from "react-router-dom";
import TeddyBearForm from "../TeddyBearForm/TeddyBearForm";
import Contact from "../Home/Contact/Contact";
import NavigationAfterLogin from "../Navigation/NavigationAfterLogin";
import HeaderAfterLogin from "../HeaderAfterLogin/HeaderAfterLogin";


class FormAfterLogin extends Component {
    render() {
        const styleButton = {
            color: "grey"
        }
        return (
            <>
                <section className={"wraper"}>
                <HeaderAfterLogin/>
                <TeddyBearForm/>

                    < Contact/>
                </section>
            </>
        )
    }
}


export default FormAfterLogin;