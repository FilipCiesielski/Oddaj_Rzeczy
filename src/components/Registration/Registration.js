import React, {Component} from 'react';
import "./Registration.scss"
import RegistrationFirebase from "./RegistrationFirebase";
import FirebaseContext from "../Firebase/Contex";
import {withRouter} from "react-router-dom"

const RegisterBase=withRouter(RegistrationFirebase)


class Registration extends Component {

    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <RegisterBase firebase={firebase} />}
            </FirebaseContext.Consumer>
        )
    }
}


export default Registration;