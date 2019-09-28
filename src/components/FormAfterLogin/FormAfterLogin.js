import React, {Component} from 'react';
import "./FormAfterLogin.scss"
import Navigation from "../Navigation/Navigation";
import {Link, NavLink} from "react-router-dom";
import TeddyBearForm from "../TeddyBearForm/TeddyBearForm";


class FormAfterLogin extends Component {
    render() {
        const styleButton = {
            color: "grey"
        }
        return (
            <>

                <div name="oddaj-rzeczy" className={"header2"}>

                    <div className={"background2"}></div>
                    <div className={"main2"}><Navigation/>
                        <div className={"home2"}>
                            <article>
                                <p>Oddaj rzeczy, których już nie chcesz <br/>POTRZEBUJĄCYM</p>
                            </article>
                            <div className={"deco"}></div>
                            <section>
                                <span>Wystarzczą 4 proste kroki:</span>
                                <div className={"kickContainer"}>
                                    <div className={"kickQ"}><span>1</span><p>Wybierz<br/>rzeczy</p></div>
                                    <div className={"kickQ"}><span>2</span><p>Spakuj je<br/>w worki</p></div>
                                    <div className={"kickQ"}><span>3</span><p>Wybierz<br/>fundację</p></div>
                                    <div className={"kickQ"}><span>4</span><p>Zamów<br/>kuriera</p></div>
                                </div>

                            </section>

                        </div>
                    </div>
                </div>
                <TeddyBearForm/>
            </>
        )
    }
}


export default FormAfterLogin;