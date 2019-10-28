import React, {Component} from 'react';
import "./Step5.scss"


class Step5 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className={"teddyBearForm"}>

                <div className={"teddyBearForm__backgroundPhoto"}>
                    <h2 className={"teddyBearForm__summaryHeader"}>Podsumowanie Twojej darowizny </h2>
                    <div className={"teddyBearForm__box"}>
                        <h4>Oddajesz:</h4>
                        <div className={"teddyBearForm__box__logo"}>
                            <div  className={"teddyBearForm__box__logo__items"}>
                                <div className={"box__logo--tShirt"}></div>
                                <p>{this.props.valueFromOption} worki, {this.props.valueFromRadio}, {this.props.valueFromCheckbox.toString()} </p>
                            </div>
                            <div  className={"teddyBearForm__box__logo__items"}>
                                <div className={"box__logo--recycling"}></div>
                                <p>dla lokalizacji: {this.props.valueOptionCity}</p></div>
                        </div>
                        <div className={"teddyBearForm__box__form"}>
                            <div>
                                <h4>Adres odbioru:</h4>
                                <div className={"teddyBearForm__box__form--summaryInfo"}>
                                    Ulica
                                    <p>{this.props.street}</p>
                                </div>
                                <div className={"teddyBearForm__box__form--summaryInfo"}>
                                    Miasto
                                    <p>{this.props.city}</p>
                                </div>
                                <div className={"teddyBearForm__box__form--summaryInfo"}>
                                    Kod<br/>pocztowy
                                    <p>{this.props.postcode}</p>
                                </div>
                                <div className={"teddyBearForm__box__form--summaryInfo"}>
                                    Numer<br/>telefonu
                                    <p>{this.props.phone}</p>
                                </div>
                            </div>
                            <div>
                                <h4>Termin odbioru:</h4>

                                <div className={"teddyBearForm__box__form--summaryInfo"}>
                                    Data
                                    <p>{this.props.date}</p>
                                </div>
                                <div className={"teddyBearForm__box__form--summaryInfo"}>
                                    Godzina
                                    <p>{this.props.time}</p>
                                </div>
                                <div className={"teddyBearForm__box__form--summaryInfo"}>
                                    Uwagi<br/>dla kuriera
                                    <p>{this.props.message}</p>
                                </div>
                            </div>
                        </div>
                        <div className={"teddyBearForm__buttons"}>
                            <input onClick={this.props.handleButtonPrev} type={"button"} value='Wstecz'/>
                            <input type={"button"} onClick={this.props.handleButtonNext} value='Potwierdzam'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Step5
