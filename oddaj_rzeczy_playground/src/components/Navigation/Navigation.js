import React,{Component} from 'react';
import "./Navigation.scss"
import {NavLink} from "react-router-dom"
import "../../SCSS/settings/_colors.scss"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class Navigation extends Component{

    render() {
        const selectedStyleLogin={
            border: "1px solid #FAD648",


        }
        const styleLogin={
            color:"#3C3C3C",
        }
        const selectedStyleMenu={
            border: "1px solid #3C3C3C",
        }
        const styleMenu={
            color:"#3C3C3C",
        }
        return(
       <>
           <nav className={"container nav"}>
           <ul className={"login"}>
               <li><NavLink style={styleLogin} activeStyle={selectedStyleLogin} to={"/logowanie"}>Zaloguj</NavLink></li>
               <li><NavLink style={styleLogin} activeStyle={selectedStyleLogin} to={"/rejestracja"}>Załóż konto</NavLink></li>
           </ul>
           <ul className={"menu"}>
               <li><NavLink style={styleMenu} activeStyle={selectedStyleMenu} exact to={"/"}>Start</NavLink></li>
               <li><Link activeClass="active" className="test2" to="ThreeColumns" spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
               <li><Link activeClass="active" className="test2" to="About" spy={true} smooth={true} duration={500}>O Nas</Link></li>
               <li><Link activeClass="active" className="test2" to="Organisation" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Link></li>
               <li><Link activeClass="active" className="test2" to="Contact" spy={true} smooth={true} duration={500}>Kontakt</Link></li>
                  </ul>
    </nav>
        </>
        )
    }
}


export default Navigation;