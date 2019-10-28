import React, {Component} from 'react';
import "./TeddyBearForm.scss"
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";
import Step6 from "./Step6/Step6";

class TeddyBearForm extends Component {

    state = {
        valueFromRadio: null,
        valueFromOption: "",
        valueOptionCity: "",
        valueFromCheckbox: [],
        valueFromNameOrganisation: "",
        button: true,
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
            [e.target.name]: e.target.value, valueFromNameOrganisation: e.target.value
        })
    };
    handleOnChangeCity = e => {

        this.setState({
            valueOptionCity: e.target.value,
        })
    };
    handleOnChangeOption = e => {

        this.setState({
            valueFromOption: e.target.value,
        })
    };

    handleOnChangeCheckbox = (e) => {
        if (e.target.checked && this.state.valueFromCheckbox.indexOf(e.target.value) === -1) {
            let arrayValue = this.state.valueFromCheckbox;
            arrayValue.push(e.target.value);
            this.setState({valueFromCheckbox: arrayValue})
        } else if (e.target.checked === false && this.state.valueFromCheckbox.indexOf(e.target.value) > -1) {
            let arrayValue = this.state.valueFromCheckbox;
            arrayValue.splice(arrayValue.indexOf(e.target.value), 1);
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
        this.setState({counter: this.state.counter - 1});
        if (this.state.counter === 2) {
            this.setState({valueFromRadio: null,})
        }
    };

    handleOnSubmit = e => {
        e.preventDefault();
        this.setState({
            errStreet: false, errCity: false, errPostcode: false, errPhone: false, errDate: false, errTime: false,
        });


        const postcodeReg = /[0-9]{2}-[0-9]{3}$/i;
        const phoneReg = /^\d{3}-?\d{3}-?\d{3}$/;


        const {street, city, postcode, phone, date, time} = this.state;

        console.log(date)
        if (street.length > 2 && city.length > 2 && postcodeReg.test(postcode) && phoneReg.test(phone) && date.length>0 && time.length>0) {
            this.setState({formSend: true, counter: this.state.counter + 1})
        } else {
            if (street.length < 2) {
                this.setState({errStreet: true});

            }
            if (city.length < 2) {
                this.setState({errCity: true});

            }
            if (!postcodeReg.test(postcode)) {
                this.setState({errPostcode: true});

            }
            if (!phoneReg.test(phone)) {
                this.setState({errPhone: true});

            }
            if(date.length===0){
                this.setState({errDate: true})
            }
            if(time.length===0){
                this.setState({errTime: true})
            }

        }
    };

    render() {
        let valueFromRadio = this.state.valueFromRadio;

        let step1 = <Step1 handleOnChangeRadio={this.handleOnChangeRadio} handleButtonNext={this.handleButtonNext}/>;


        let step2 = <Step2 handleOnChangeOption={this.handleOnChangeOption} handleButtonPrev={this.handleButtonPrev}
                           handleButtonNext={this.handleButtonNext}/>;


        let step3 = <Step3 handleOnChangeCity={this.handleOnChangeCity}
                           handleOnChangeCheckbox={this.handleOnChangeCheckbox} button={this.state.button}
                           handleButtonPrev={this.handleButtonPrev} handleButtonNext={this.handleButtonNext}
                           handleOnChange={this.handleOnChange}/>;

        let step4 = <Step4 handleOnSubmit={this.handleOnSubmit} handleButtonPrev={this.handleButtonPrev}
                           handleButtonNext={this.handleButtonNext} handleOnChange={this.handleOnChange}
                           street={this.state.street} city={this.state.city} postcode={this.state.postcode}
                           phone={this.state.phone}
                           date={this.state.date} time={this.state.time} message={this.state.message}
                           errStreet={this.state.errStreet}
                           errCity={this.state.errCity} errPostcode={this.state.errPostcode}
                           errPhone={this.state.errPhone}
                           errDate={this.state.date} errTime={this.state.time}/>;


        let step5 = <Step5 valueFromRadio={this.state.valueFromRadio} valueFromOption={this.state.valueFromOption}
                           valueFromCheckbox={this.state.valueFromCheckbox.toString()}
                           valueOptionCity={this.state.valueOptionCity} handleButtonPrev={this.handleButtonPrev}
                           handleButtonNext={this.handleButtonNext} street={this.state.street}
                           city={this.state.city} postcode={this.state.postcode} phone={this.state.phone}
                           date={this.state.date} time={this.state.time} message={this.state.message}/>;


        let step6 = <Step6/>;


        if (this.state.counter === 2 && valueFromRadio !== null) {
            return step2
        } else if (this.state.counter === 3 && valueFromRadio !== null) {
            return step3
        } else if (this.state.counter === 4 && valueFromRadio !== null) {
            return step4
        } else if (this.state.counter === 5 && valueFromRadio !== null) {
            return step5
        } else if (this.state.counter === 6 && valueFromRadio !== null) {
            return step6
        }

        return step1

    }

}


export default TeddyBearForm;