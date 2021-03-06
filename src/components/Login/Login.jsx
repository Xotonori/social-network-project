import React from 'react'
import classes from './Login.module.scss'
import LoginForm from "./LoginForm/LoginForm";

const Login = props => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;