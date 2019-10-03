import React,{Component} from 'react';
import "./Navigation.scss"
import {NavLink} from "react-router-dom"
import "../../scss/settings/_colors.scss"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import NavigationUser from "./NavigationUser";



class NavigationAfterLogin extends Component{

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
           <nav className={"container nav"}>
          <NavigationUser/>
           <ul className={"menu"}>
               <li><NavLink  activeStyle={selectedStyleStart} exact to={"/"}>Start</NavLink></li>
               <li><NavLink activeStyle={selectedStyleStart} to={"/FourSteps"}>O co chodzi?</NavLink></li>
               <li><NavLink to={"/About"}>O Nas</NavLink></li>
               <li><NavLink activeStyle={selectedStyleStart} to={"/Organisation"}>Fundacja i organizacje</NavLink></li>
               <li><Link activeClass="active" className="test2" to="Contact" spy={true} smooth={true} duration={500}>Kontakt</Link></li>
                  </ul>
    </nav>
        </>
        )
    }
}


export default NavigationAfterLogin;