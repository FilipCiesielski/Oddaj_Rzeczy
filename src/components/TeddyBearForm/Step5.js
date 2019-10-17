import React, {Component} from 'react';
import "./TeddyBearForm.scss"


class Step5 extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section className={"teddyForm"}>
                <div className={"teddyBackground"}>
                    <h2 className={"resume"}>Podsumowanie Twojej darowizny</h2>
                    <div className={"stepsForm"}>
                        <h4>Oddajesz:</h4>
                        <div className={"logoInfo"}>
                            <section>
                                <div className={"tShirt"}></div>
                                <p>{this.props.valueFromOption} worki, {this.props.valueFromRadio}, {this.props.valueFromCheckbox.toString()} </p>
                            </section>
                            <section>
                                <div className={"recycling"}></div>
                                <p>dla lokalizacji: {this.props.valueOptionCity}</p></section>
                        </div>
                        <div className={"forms"}>
                            <div>
                                <h4>Adres odbioru:</h4>
                                <div className={"resumeInfo"}>
                                    Ulica
                                    <p>{this.props.street}</p>
                                </div>
                                <div className={"resumeInfo"}>
                                    Miasto
                                    <p>{this.props.city}</p>
                                </div>
                                <div className={"resumeInfo"}>
                                    Kod<br/>pocztowy
                                    <p>{this.props.postcode}</p>
                                </div>
                                <div className={"resumeInfo"}>
                                    Numer<br/>telefonu
                                    <p>{this.props.phone}</p>
                                </div>
                            </div>
                            <div>
                                <h4>Termin odbioru:</h4>

                                <div className={"resumeInfo"}>
                                    Data
                                    <p>{this.props.date}</p>
                                </div>
                                <div className={"resumeInfo"}>
                                    Godzina
                                    <p>{this.props.time}</p>
                                </div>
                                <div className={"resumeInfo"}>
                                    Uwagi<br/>dla kuriera
                                    <p>{this.props.message}</p>
                                </div>
                            </div>
                        </div>
                        <div className={"bagsButtons"}>
                            <input onClick={this.props.handleButtonPrev} type={"button"} value='Wstecz'/>
                            <input type={"button"} onClick={this.props.handleButtonNext} value='Potwierdzam'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }}

export default Step5
