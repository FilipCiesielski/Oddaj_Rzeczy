import React, {Component} from 'react';
import "./Step4.scss"


class Step4 extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <section className={"teddyBearForm"}>
                <div className={"teddyBearForm__info"}>
                    <div>
                        <h2>Ważne!</h2>
                        <p>Podaj adres oraz odbiór terminu rzeczy.</p>
                    </div>
                </div>
                <div className={"teddyBearForm__backgroundPhoto"}>
                    <span className={"teddyBearForm__numberOfSteps"}>Kro 4/4</span>
                    <div className={"teddyBearForm__box"}>
                        <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                        <div className={"teddyBearForm__box__form"}>
                            <div>
                                <h4>Adres odbioru:</h4>
                                <form onSubmit={this.props.handleOnSubmit}>
                                    {this.props.errStreet &&
                                    <p style={{color: 'red', fontSize: "0.7rem"}}>Nazwa ulicy
                                        nieprawidłowa!</p>}
                                    <label>
                                        Ulica
                                        <input name={"street"} onChange={this.props.handleOnChange}
                                               value={this.props.street}/>
                                    </label>
                                    {this.props.errCity &&
                                    <p style={{color: 'red', fontSize: "0.7rem"}}>Nazwa miasta
                                        nieprawidłowa!</p>}

                                    <label>
                                        Miasto
                                        <input name={"city"} type="city" onChange={this.props.handleOnChange}
                                               value={this.props.city}/>

                                    </label>
                                    {this.props.errPostcode && <p style={{
                                        color: 'red',
                                        marginBottom: "-0.5rem",
                                        fontSize: "0.7rem"
                                    }}>Kod nieprawidłowy!</p>}
                                    <label>
                                        Kod<br/>pocztowy
                                        <input name={"postcode"} type={"postcode"} onChange={this.props.handleOnChange}
                                               value={this.props.postcode}/>
                                    </label>
                                    {this.props.errPhone && <p style={{
                                        color: 'red',
                                        marginBottom: "-0.5rem",
                                        fontSize: "0.7rem"
                                    }}>Numer nieprawidłowy!</p>}
                                    <label>
                                        Numer telefonu
                                        <input name={"phone"} type={"tel"} onChange={this.props.handleOnChange}
                                               value={this.props.phone}/>
                                    </label>

                                </form>

                            </div>
                            <div>
                                <h4>Termin odbioru:</h4>
                                <form onSubmit={this.props.handleOnSubmit}>
                                    {!this.props.errDate && <p style={{
                                        color: 'grey',
                                        fontSize: "0.7rem"
                                    }}>Podaj datę!</p>}
                                    <label>
                                        Data
                                        <input type="date" name="date" onChange={this.props.handleOnChange}
                                               value={this.props.date}/>
                                    </label>
                                    {!this.props.errTime && <p style={{
                                        color: 'grey',
                                        fontSize: "0.7rem"
                                    }}>Podaj godzinę od 9-18!</p>}
                                    <label>
                                        Godzina
                                        <input type="time" name="time" min="06:00" max="19:00"
                                               onChange={this.props.handleOnChange}/>
                                    </label>
                                    <label>
                                        Uwagi dla kuriera
                                        <textarea name={"message"} onChange={this.props.handleOnChange}
                                                  value={this.props.message}/>
                                    </label>
                                </form>
                            </div>
                        </div>
                        <div className={"teddyBearForm__buttons"}>
                            <input onClick={this.props.handleButtonPrev} type={"button"} value='Wstecz'/>
                            <input onClick={this.props.handleOnSubmit} type={"button"} value='Dalej'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Step4
