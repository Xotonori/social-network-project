import React from 'react'
import {Field, reduxForm} from "redux-form";
// import s from './LoginForm.module.css'

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login'
                       name="login"
                       component="input"
                       type="text"/>
            </div>
            <div>
                <Field placeholder='Password'
                       name="password"
                       component="input"
                       type="password"/>
            </div>
            <div>
                <Field name="remember-me"
                       component="input"
                       type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);