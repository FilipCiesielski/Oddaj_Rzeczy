import React, {Component} from 'react';
import "./Navigation.scss"
import {NavLink} from "react-router-dom"
import "../../scss/settings/_colors.scss"
import {Link} from 'react-scroll'
import NavigationUser from "./NavigationUser";


class Navigation extends Component {

    render() {

        const selectedStyleStart = {
            border: "0.0625rem solid #737373",
            padding: "0.3rem 1rem"
        };
        return (
            <>
                <nav className={"container nav"}>
                    <NavigationUser/>
                    <ul className={"menu"}>
                        <li><NavLink activeStyle={selectedStyleStart} exact to={"/"}>Start</NavLink></li>
                        <li><Link activeClass="active" className="test2" to="FourSteps" spy={true} smooth={true}
                                  duration={500}>O co chodzi?</Link></li>
                        <li><Link activeClass="active" className="test2" to="About" spy={true} smooth={true}
                                  duration={500}>O Nas</Link></li>
                        <li><Link activeClass="active" className="test2" to="Organisation" spy={true} smooth={true}
                                  duration={500}>Fundacja i organizacje</Link></li>
                        <li><Link activeClass="active" className="test2" to="Contact" spy={true} smooth={true}
                                  duration={500}>Kontakt</Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}


export default Navigation;