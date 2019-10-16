import React, {Component} from 'react';
import "./TeddyBearForm.scss"


class Step2 extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section className={"teddyForm"}>
                <div className={"yellowInfo"}>
                    <div>
                        <h2>Ważne!</h2>
                        <p>Wszystkie rzeczy do spakowania zapakuj w 60l worki. Dokładną instrukcję jak spakować worki dostaniesz <a
                            href={""}>TUTAJ</a></p>
                    </div>
                </div>
                <div className={"teddyBackground"}>
                    <span>Krok 2/4</span>
                    <div className={"stepsForm"}>
                        <h2>Podaj liczbę 60l worków, które spakowałeś/aś rzeczy:</h2>

                        <div className={"bags"}>
                            <p>Liczba 60L worków:</p>
                            <select value={this.props.valueFromOption} onChange={this.props.handleOnChangeOption}>
                                <option value="" disabled hidden>-wybierz-</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className={"bagsButtons"}>
                            <input onClick={this.props.handleButtonPrev} type={"button"} value='Wstecz'/>
                            <input onClick={this.props.handleButtonNext} type={"button"} value='Dalej'/>
                        </div>
                    </div>
                </div>
            </section>

        )
    }}

export default Step2
