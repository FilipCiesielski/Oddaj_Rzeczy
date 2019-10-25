import React, {Component} from 'react';
import "./Header.scss"
import Navigation from "../../Navigation/Navigation";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        const styleButton = {
            color: "grey"
        }
        return (
            <>

                <div name="Header" className={"header"}>

                    <div className={"header__backgroundPhoto"}></div>
                    <div className={"header__main"}><Navigation/>
                        <div className={"header__main__article"}>
                            <article>
                                <p>Zacznij pomagać!</p>
                                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                            </article>
                            <div className={"header__main__decoration"}></div>
                            <div className={"header__main__buttons"}>
                                <button><NavLink activeStyle={styleButton} to={"/logowanie"}>ODDAJ<br/> RZECZY</NavLink>
                                </button>
                                <button><NavLink activeStyle={styleButton}
                                                 to={"/logowanie"}>ZORGANIZUJ<br/>ZBÓRKĘ</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Header;