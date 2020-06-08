import React, { Fragment } from "react";
import RegisterForm from "./registerForms";

const RegisterPage = () => {
    return (
        <Fragment>
            <div className="registration-main">
                <h5 className="registration-title">New User</h5>
                <p className="registration-requied-fields">*Required fields</p>
                <RegisterForm />
            </div>
        </Fragment>
    );
};

export default RegisterPage;
