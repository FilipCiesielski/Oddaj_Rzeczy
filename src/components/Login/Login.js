import React, {Component} from 'react';
import "./Login.scss"
import FirebaseContext from "../Firebase/Contex";
import LoginFirebase from "./LoginFirebase";
import {withRouter} from "react-router-dom"

const LoginBase=withRouter(LoginFirebase)

class Login extends Component {
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <LoginBase firebase={firebase} />}
            </FirebaseContext.Consumer>
        );
    }
    }


    export default Login;