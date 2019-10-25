import React,{Component} from 'react';
import "./FourSteps.scss"
import {NavLink} from "react-router-dom";

class FourSteps extends Component{
    render() {
        const styleButton={
            styleButtonColor:"grey"
        }
        return(
            <div name="FourSteps" className={"fourSteps"}>
                <section className={"fourSteps__header"}>
            <span>Wystarczą 4 proste kroki</span>
                <div className={"fourSteps__header__decorations"}></div>
                </section>
                <div className={"fourSteps__background"}>
                <section className={"fourSteps__column"}>
                    <div className={"fourSteps__column__instructions"}>
                    <div className={"fourSteps__column__instructions--icon1"}></div>
                    <span>Wybierz rzeczy</span>
                    <hr/>
                    <p>ubrania,zabawki, <br/> sprzęt i inne</p>
                    </div>
                    <div className={"fourSteps__column__instructions"}>
                        <div className={"fourSteps__column__instructions--icon2"}></div>
                        <span>Spakuj je</span>
                        <hr/>
                        <p>skorzystaj <br/>z worków na śmieci</p>
                    </div>
                    <div className={"fourSteps__column__instructions"}>
                        <div className={"fourSteps__column__instructions--icon3"}></div>
                        <span>Zdecyduj komu<br/>
                        chcesz pomóc</span>
                        <hr/>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className={"fourSteps__column__instructions"}>
                        <div className={"fourSteps__column__instructions--icon4"}></div>
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


export default FourSteps;