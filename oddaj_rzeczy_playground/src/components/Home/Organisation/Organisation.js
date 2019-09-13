import React,{Component} from 'react';
import "./Organisation.scss"
import {NavLink} from "react-router-dom";

class Organisation extends Component{
    render() {
        const styleButton={
            color:"grey"
        }
        return(
            <div name="Organisation" className={"organisation container"}>
                <section className={"header_organisation"}>
            <span>Wystarczą 4 proste kroki</span>
                <div className={"deco_organisation"}></div>
                </section>
                <div className={"bColor"}>
                <section className={"steps_instruction"}>
                    <div className={"steps_column"}>
                    <div className={"icon1"}></div>
                    <span>Wybierz rzeczy</span>
                    <hr/>
                    <p>ubrania,zabawki, <br/> sprzęt i inne</p>
                    </div>
                    <div className={"steps_column"}>
                        <div className={"icon2"}></div>
                        <span>Spakuj je</span>
                        <hr/>
                        <p>skorzystaj <br/>z worków na śmieci</p>
                    </div>
                    <div className={"steps_column"}>
                        <div className={"icon3"}></div>
                        <span>Zdecyduj komu<br/>
                        chcesz pomóc</span>
                        <hr/>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className={"steps_column"}>
                        <div className={"icon4"}></div>
                        <span>Zamów kuriera</span>
                        <hr/>
                        <p>kurier przyjedzie <br/> w dowolnym terminie</p>
                    </div>
                </section>
                </div>
                <button><NavLink activeStyle={styleButton} to={"/logowanie"}>ODDAJ<br/> RZECZY</NavLink></button>

            </div>
        )
    }
}


export default Organisation;