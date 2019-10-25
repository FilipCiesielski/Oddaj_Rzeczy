import React, {Component} from 'react';
import "./Logout.scss"
import {NavLink} from "react-router-dom";
import NavigationUser from "../Navigation/NavigationUser";


class Logout extends Component {


    render() {
        return (
            <>
                <div className={"navigation__logout"}><NavigationUser/></div>
                <section className={"logout"}>
                    <div className={"logout__box"}>
                        <span>Wylogowanie nastąpiło<br/>
                        pomyślnie!</span>
                        <div className={"logout__box__decorations"}></div>
                        <div className={"logout__box--buttons"}>
                            <button type='submit'><NavLink to={"/"}>Strona główna</NavLink></button>

                        </div>


                    </div>
                </section>
            </>
        )
    }
}


export default Logout;