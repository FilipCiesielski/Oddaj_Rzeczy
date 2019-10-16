import React, {Component} from 'react';
import "./FormAfterLogin.scss"
import TeddyBearForm from "../TeddyBearForm/TeddyBearForm";
import Contact from "../Home/Contact/Contact";
import HeaderAfterLogin from "../HeaderAfterLogin/HeaderAfterLogin";


class FormAfterLogin extends Component {
    render() {

        return (
            <>
                <section className={"wraper"}>
                <HeaderAfterLogin/>
                <TeddyBearForm/>

                    < Contact/>
                </section>
            </>
        )
    }
}


export default FormAfterLogin;