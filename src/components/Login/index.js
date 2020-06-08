import React, { Fragment } from "react";
import LoginForm from "./loginForms";

const Login = () => {
    return (
        <Fragment>
            <div className="login-main">
                <h5 className="login-title">Returning User</h5>
                <LoginForm />
            </div>
        </Fragment>
    );
};

export default Login;
