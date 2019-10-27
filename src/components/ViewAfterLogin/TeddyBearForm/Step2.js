import React, {Component} from 'react';
import "./Step2.scss"


class Step2 extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section className={"teddyBearForm"}>
                <div className={"teddyBearForm__info"}>
                    <div>
                        <h2>Ważne!</h2>
                        <p>Wszystkie rzeczy do spakowania zapakuj w 60l worki. Dokładną instrukcję jak spakować worki dostaniesz <a
                            href={""}>TUTAJ</a></p>
                    </div>
                </div>
                <div className={"teddyBearForm__backgroundPhoto"}>
                    <span className={"teddyBearForm__numberOfSteps"}>Krok 2/4</span>
                    <div className={"teddyBearForm__box"}>
                        <h2>Podaj liczbę 60l worków, które spakowałeś/aś rzeczy:</h2>

                        <div className={"teddyBearForm__box__select"}>
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
                        <div className={"teddyBearForm__buttons"}>
                            <input onClick={this.props.handleButtonPrev} type={"button"} value='Wstecz'/>
                            <input onClick={this.props.handleButtonNext} type={"button"} value='Dalej'/>
                        </div>
                    </div>
                </div>
            </section>

        )
    }}

export default Step2
