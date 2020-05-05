import React, { Component } from "react";
import { SignUpForm } from '../components/Forms';
import API from "../utils/API";

class Login extends Component {
    submitForm = (data) => {
        console.log(data);
        API.newUser({
            name: data.name,
            email: data.email,
            password: data.password,
            acctType: data.acctType
        })
            .then(res => {
                console.log('Account Created');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <container>
                <SignUpForm
                    cbSubmit= {this.submitForm}
                />
            </container>
        )
    }
}

export default Login;