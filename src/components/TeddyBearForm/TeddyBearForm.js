import React, {Component} from 'react';
import "./TeddyBearForm.scss"
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";



const infoStep2 = (<>

</>);
const infoStep3 = (<>


</>);
const infoStep4 = (<>
    <h2>Ważne!</h2>
    <p>Podaj adres oraz odbiór terminu rzeczy.</p>

</>);

class TeddyBearForm extends Component {

    state = {
        valueFromRadio: null,
        valueFromOption: "",
        valueOptionCity: "",
        valueFromCheckbox: [],
        valueFromNameOrganisation: "",

        button: true,

        goToStep1: true,
        goToStep2: false,
        goToStep3: false,
        goToSteep4: false,

        counter: 0,

        formSend: false,
        street: "",
        city: "",
        postcode: "",
        phone: "",
        date: "",
        time: "",
        message: "",
        errStreet: false,
        errCity: false,
        errPostcode: false,
        errPhone: false,
        errDate: false,
        errTime: false,
        errMessage: false,


    };
    handleOnChange = e => {

        this.setState({
            [e.target.name]: e.target.value, valueFromNameOrganisation: e.target.value,
        })
    }
    handleOnChangeCity = e => {

        this.setState({
            valueOptionCity: e.target.value,
        })
    }
    handleOnChangeOption = e => {

        this.setState({
            valueFromOption: e.target.value,
        })
    }

    handleOnChange1 = (e) => {
        if (e.target.checked === true && this.state.valueFromCheckbox.indexOf(e.target.value) === -1) {
            let arrayValue = this.state.valueFromCheckbox;
            arrayValue.push(e.target.value);
            this.setState({valueFromCheckbox: arrayValue})
        } else if (e.target.checked == false && this.state.valueFromCheckbox.indexOf(e.target.value) > -1) {
           let arrayValue = this.state.valueFromCheckbox;
            arrayValue.splice(arrayValue.indexOf(e.target.value),1);
            this.setState({valueFromCheckbox: arrayValue});


        }
        if (this.state.valueFromCheckbox.length > 0) {
            this.setState({button: false})
        } else {
            this.setState({button: true})
        }

    };


    handleOnChangeRadio = e => {

        this.setState({
            valueFromRadio: e.target.value, counter: 1
        })
    };

    handleButtonNext = () => {
        this.setState({counter: this.state.counter + 1})

    };

    handleButtonPrev = () => {
        this.setState({counter: this.state.counter - 1})
        if (this.state.counter == 2) {
            this.setState({valueFromRadio: null,})
        }
    };

    handleOnSubmit = e => {
        e.preventDefault();
        const streetReg = /^[a-zA-Z]{2,}\s[0-9]+[abc]$/i;
        const cityReg = /^[a-zA-Z]{2,}$/i;
        const postcodeReg = /[0-9]{2}-[0-9]{3}$/i;
        const phoneReg = /^\d{9}$/;


        let {street, city, postcode, phone, date, errPostcode, errStreet, errCity, errDate, errPhone} = this.state;


        if (street.length > 2 && cityReg.test(city) && postcodeReg.test(postcode) && phoneReg.test(phone)) {
            this.setState({formSend: true, counter:this.state.counter +1})
        } else {
            if (street.length > 2) {
                this.setState({errStreet: true,});
                console.log(errStreet)
            }
            if (!cityReg.test(city)) {
                this.setState({errCity: true});
                console.log(errCity)
            }
            if (!postcodeReg.test(postcode)) {
                this.setState({errPostcode: true});
                console.log(errPostcode)
            }
            if (!phoneReg.test(phone)) {
                this.setState({errPhone: true});
                console.log(errPhone)
            }
        }

    };

    render() {
        let valueFromRadio = this.state.valueFromRadio;

        let goToStep1 = this.state.goToStep1;

        let goToStep2 = this.state.goToStep2;

        let goToStep3 = this.state.goToStep3;


        let step1 = <Step1 handleOnChangeRadio={this.handleOnChangeRadio} handleButtonNext={this.handleButtonNext}/>;


        let step2 = <Step2 handleOnChangeOption={this.handleOnChangeOption} handleButtonPrev={this.handleButtonPrev} handleButtonNext={this.handleButtonNext} />


        let step3 = <Step3 handleOnChangeCity={this.handleOnChangeCity} disabled={this.state.button} onChange1={this.handleOnChange1} value={this.state.valueFromCheckbox}
                           handleButtonPrev={this.handleButtonPrev} handleButtonNext={this.handleButtonNext} handleOnChange={this.handleOnChange} />

        let step4 = <>
            <section className={"teddyForm"}>
                <div className={"yellowInfo"}>
                    <div>
                        {infoStep4}
                    </div>
                </div>
                <div className={"teddyBackground"}>
                    <span>Kro 4/4</span>
                    <div className={"stepsForm"}>
                        <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                        <div className={"forms"}>
                            <div>
                                <h4>Adres odbioru:</h4>
                                <form onSubmit={this.handleOnSubmit}>
                                    <label>
                                        Ulica
                                        <input name={"street"} onChange={this.handleOnChange}
                                               value={this.state.street}/>
                                    </label>
                                    <label>
                                        Miasto
                                        <input name={"city"} type="city" onChange={this.handleOnChange}
                                               value={this.state.city}/>
                                    </label>
                                    <label>
                                        Kod<br/> pocztowy
                                        <input name={"postcode"} type={"postcode"} onChange={this.handleOnChange}
                                               value={this.state.postcode}/>
                                    </label>
                                    <label>
                                        Numer telefonu
                                        <input name={"phone"} type={"tel"} onChange={this.handleOnChange}
                                               value={this.state.phone}/>
                                    </label>
                                </form>
                            </div>
                            <div>
                                <h4>Termin odbioru:</h4>
                                <form onSubmit={this.handleOnSubmit}>
                                    <label>
                                        Data
                                        <input type="date" name="date" onChange={this.handleOnChange}
                                               value={this.state.date}/>
                                    </label>
                                    <label>
                                        Godzina
                                        <input type="time" name="time" min="06:00" max="19:00"
                                               onChange={this.handleOnChange}/>
                                    </label>
                                    <label>
                                        Uwagi dla kuriera
                                        <textarea name={"message"} onChange={this.handleOnChange}
                                                  value={this.state.message}/>
                                    </label>
                                </form>
                            </div>
                        </div>
                        <div className={"bagsButtons"}>
                            <input onClick={this.handleButtonPrev} type={"button"} value='Wstecz'/>
                            <input onClick={this.handleOnSubmit}  type={"button"} value='Dalej'/>
                        </div>
                    </div>
                </div>
            </section>
        </>;


        let step5 = <>
            <section className={"teddyForm"}>
                <div className={"teddyBackground"}>
                    <h2 className={"resume"}>Podsumowanie Twojej darowizny</h2>
                    <div className={"stepsForm"}>
                        <h4>Oddajesz:</h4>
                        <div className={"logoInfo"}>
                            <section>
                                <div className={"tShirt"}></div>
                                <p>{this.state.valueFromOption} worki, {this.state.valueFromRadio}, {this.state.valueFromCheckbox.toString()} </p>
                            </section>
                            <section>
                                <div className={"recycling"}></div>
                                <p>dla lokalizacji: {this.state.valueOptionCity}</p></section>
                        </div>
                        <div className={"forms"}>
                            <div>
                                <h4>Adres odbioru:</h4>
                                <div className={"resumeInfo"}>
                                    Ulica
                                    <p>{this.state.street}</p>
                                </div>
                                <div className={"resumeInfo"}>
                                    Miasto
                                    <p>{this.state.city}</p>
                                </div>
                                <div className={"resumeInfo"}>
                                    Kod<br/>pocztowy
                                    <p>{this.state.postcode}</p>
                                </div>
                                <div className={"resumeInfo"}>
                                    Numer<br/>telefonu
                                    <p>{this.state.phone}</p>
                                </div>
                            </div>
                            <div>
                                <h4>Termin odbioru:</h4>

                                <div className={"resumeInfo"}>
                                    Data
                                    <p>{this.state.date}</p>
                                </div>
                                <div className={"resumeInfo"}>
                                    Godzina
                                    <p>{this.state.time}</p>
                                </div>
                                <div className={"resumeInfo"}>
                                    Uwagi<br/>dla kuriera
                                    <p>{this.state.message}</p>
                                </div>
                            </div>
                        </div>
                        <div className={"bagsButtons"}>
                            <input onClick={this.handleButtonPrev} type={"button"} value='Wstecz'/>
                            <input type={"button"} onClick={this.handleButtonNext} value='Potwierdzam'/>
                        </div>
                    </div>
                </div>
            </section>
        </>;


        let step6 = <>
            <section className={"teddyForm"}>
                <div className={"teddyBackground"}>
                    <div className={"outro"}>
                        <h1>
                            Dziękujemy za przesłanie formularza.<br/>
                            Na maila wyślemy wszelkie<br/>
                            informacje o odbiorze.
                        </h1>
                        <div className={"deco"}></div>
                    </div>
                </div>
            </section>
        </>;



        if (this.state.counter == 2 && valueFromRadio !== null) {
            return step2
        } else if (this.state.counter == 3 && valueFromRadio !== null) {
            return step3
        } else if (this.state.counter == 4 && valueFromRadio !== null) {
            return step4
        } else if (this.state.counter == 5 && valueFromRadio !== null) {
            return step5
        } else if (this.state.counter == 6 && valueFromRadio !== null) {
            return step6
        }

        return step1

    }

}


export default TeddyBearForm;