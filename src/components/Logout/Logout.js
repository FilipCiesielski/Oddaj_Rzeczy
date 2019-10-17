import React, {Component} from 'react';
import "./Logout.scss"
import {NavLink} from "react-router-dom";
import NavigationUser from "../Navigation/NavigationUser";


class Logout extends Component {


    render() {
        return (
            <>
                <div className={"logoutNav"}><NavigationUser/></div>
                <section className={"logoutView"}>
                    <div className={"logout"}>
                        <span>Wylogowanie nastąpiło<br/>
                        pomyślnie!</span>
                        <div className={"deco"}></div>
                        <div className={"buttons"}>
                            <button type='submit'><NavLink to={"/"}>Strona główna</NavLink></button>

                        </div>


                    </div>
                </section>
            </>
        )
    }
}


export default Logout;