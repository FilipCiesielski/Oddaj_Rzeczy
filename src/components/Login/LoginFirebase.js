import React, {Component} from 'react';
import "./Login.scss"
import {NavLink} from "react-router-dom";
import NavigationUser from "../Navigation/NavigationUser";

class LoginFirebase extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        formSend: false,
        errEmail: false,
        errPsw: false,
        errPsw2: false,
    };

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    handleOnSubmit = e => {


        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
        let email = this.state.email;
        let psw = this.state.password;
        let formSend = false;
        let errPsw = false;
        let errEmail = false;
        let errPsw2 = false;
        e.preventDefault();

        if (!mailReg.test(email)) {
            errEmail = true;
        }
        if (psw.length < 6) {
            errPsw = true;
        }

        formSend = (!errEmail && !errPsw);
        this.setState({formSend: formSend, errPsw: errPsw, errEmail: errEmail});

        if (formSend === true) {
            this.props.firebase
                .doSignInWithEmailAndPassword(email, psw)
                .then(authUser => {
                    sessionStorage.setItem("email", `${this.state.email}`);
                    this.setState({email: "", password: "",});
                    this.props.history.push("/oddaj-rzeczy");

                })
                .catch(error => {

                    if (error.code === "auth/wrong-password") {
                        errPsw2 = true;

                    }
                    this.setState({errPsw2: errPsw2});
                });
        }


    }

    ;

    render() {
        return (
            <>
                <section className={"jumbotron"}>
                    <div className={"navigation__login"}><NavigationUser/></div>
                    <section className={"login"}>
                        <div className={"login__box"}>
                            <span>Zaloguj się</span>
                            <div className={"login__box__decorations"}></div>
                            <form className={"login__form"} onSubmit={this.handleOnSubmit}>

                                <div className={"login__form__items"}>

                                    <label className={"login__form--inputs"}>Email
                                        <input type="email" name="email" value={this.state.email}
                                               onChange={this.handleOnChange}/>
                                        {this.state.errEmail &&
                                        <span className="errorMessage" style={{color: 'red'}}>Podany email jest nieprawidłowy!</span>}

                                    </label>

                                    <label className={"login__form--inputs"}>Hasło
                                        <input type="password" name="password" value={this.state.password}
                                               onChange={this.handleOnChange}/>
                                        {this.state.errPsw &&
                                        <span className="errorMessage" style={{color: 'red'}}>Podane hasło jest za krótkie!<br/></span>}
                                        {this.state.errPsw2 &&
                                        <span className="errorMessage" style={{color: 'red'}}>Podany email lub hasło jest nieprawidłowe!</span>}

                                    </label>


                                </div>
                                <div className={"login__form--buttons"}>
                                    <NavLink to={"/rejestracja"}>Załóż
                                        konto</NavLink>
                                    <input type='submit' value='Zaloguj' className={"buttonStyle"}/>

                                </div>


                            </form>
                        </div>
                    </section>
                </section>
            </>
        )
    }
}


export default LoginFirebase;