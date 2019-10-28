import React, {Component} from 'react';
import "./Step1.scss"



class Step1 extends Component{
   constructor(props){
       super(props)
   }
    render() {
        return (
            <section className={"teddyBearForm"}>
                <div className={"teddyBearForm__info"}>
                    <div>
                        <h2>Ważne!</h2>
                        <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać</p>
                    </div>
                </div>
                <div className={"teddyBearForm__backgroundPhoto"}>
                    <span className={"teddyBearForm__numberOfSteps"}> Krok 1/4</span>
                    <div className={"teddyBearForm__box"}>
                        <h2>Zaznacz co chcesz oddać</h2>
                        <div className={"teddyBearForm__box__radio"}>
                            <label className={"teddyBearForm__box__radio--items"}>
                                <input type={"radio"} value={"ubrania, które nadają się do ponownego użycia"}
                                       name={"radio"}
                                       onClick={this.props.handleOnChangeRadio}/>
                                <span className="checkmark"></span>
                                ubrania, które nadają się do ponownego użycia
                            </label>
                            <label className={"teddyBearForm__box__radio--items"}>
                                <input type={"radio"} value={"ubrania do wyrzucenia"} name={"radio"}
                                       onClick={this.props.handleOnChangeRadio}/>
                                <span className="checkmark"></span>
                                ubrania do wyrzucenia
                            </label>
                            <label className={"teddyBearForm__box__radio--items"}>
                                <input type={"radio"} value={"zabawki"} name={"radio"}
                                       onClick={this.props.handleOnChangeRadio}/>
                                <span className="checkmark"></span>
                                zabawki
                            </label>
                            <label className={"teddyBearForm__box__radio--items"}>
                                <input type={"radio"} value={"książki"} name={"radio"}
                                       onClick={this.props.handleOnChangeRadio}/>
                                <span className="checkmark"></span>
                                książki
                            </label>
                            <label className={"teddyBearForm__box__radio--items"}>
                                <input type={"radio"} value={"inne"} name={"radio"} className={"radio"}
                                       onClick={this.props.handleOnChangeRadio}/>
                                <span className="checkmark"></span>
                                inne
                            </label>
                        </div>
                        <div className={"teddyBearForm__buttons"}>
                            <input onClick={this.props.handleButtonNext} type={"button"} value='Dalej'/>
                        </div>
                    </div>
                </div>
            </section>

    )
    }}

    export default Step1

