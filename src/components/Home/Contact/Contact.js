import React, {Component} from 'react';
import "./Contact.scss"
import ContactFooter from "./ContactFooter";


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        formSend: false,
        errName: false,
        errEmail: false,
        errMessage: false,
    };
    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleOnSubmit = e => {
        this.setState({
            formSend: false, errName: false, errEmail: false, errMessage: false
        });


        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
        const nameReg = /^[a-zA-Z]{2,}$/i;
        let {name, email, message} = this.state;

        e.preventDefault();
        if (nameReg.test(name) && mailReg.test(email) && message.length >= 120) {
            this.setState({formSend: true})
        } else {
            if (!nameReg.test(name)) {
                this.setState({errName: true,})
            }
            if (!mailReg.test(email)) {
                this.setState({errEmail: true})
            }
            if (message.length < 120) {
                this.setState({errMessage: true})
            }
        }
        const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        })
            .then(function (data) {
                console.log(data);
            })
            .catch(function (error) {
            });

    }


    render() {
        return (
            <section name={"Contact"} className={"contact"}>
                <div className={"contact__box"}>
                    <span>Skontaktuj się z nami</span>
                    <div className={"contact__box__decorations"}></div>
                    {this.state.formSend &&
                    <span className="contact__box__successMessage" style={{color: 'green'}}>Wiadomość została wysłana!<br/>
                        Wkrótce się skontaktujemy.</span>}
                    <form onSubmit={this.handleOnSubmit}>
                        <div className={"contact__box__form"}>
                            <label>Wpisz swoje imię
                                <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}
                                       placeholder="Krzysztof"/>
                                {this.state.errName && <span className="contact__box__errorMessage" style={{color: 'red'}}>Podane imię jest nieprawidłowe!</span>}
                            </label>
                            <label>Wpisz swój email
                                <input type="email" name="email" value={this.state.email} onChange={this.handleOnChange}
                                       placeholder="abc@xyz.com"/>
                                {this.state.errEmail && <span className="contact__box__errorMessage" style={{color: 'red'}}>Podany email jest nieprawidłowy!</span>}
                            </label>
                        </div>
                        <label>Wpisz swoją wiadomość
                            <textarea rows="4" cols="30" name="message" value={this.state.message}
                                      onChange={this.handleOnChange} maxLength={"4000"}
                                      placeholder="Liquorice marshmallow jelly-o gummi bears lollipop cake cupcake brownie marzipan. Dessert ice cream muffin lollipop. Donut gummies jelly beans pie wafer tiramisu."/>
                            {this.state.errMessage &&
                            <span className="contact__box__errorMessage" style={{color: 'red'}}>Wiadomośc musi mieć conajmniej 120 znaków!</span>}
                        </label>
                        <input type='submit' value='Wyślij'/>
                    </form>
                </div>
                <ContactFooter/>

            </section>
        )
    }

}


export default Contact;