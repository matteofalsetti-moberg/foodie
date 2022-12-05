import React from "react";
import {Field, Formik, Form } from "formik";
import "./LoginPage.scss";
import { Button } from "react-bootstrap";

interface ILogin {
    name: string;
    email: string;
}

function Login() {
    function onSubmitfn(data: ILogin) {
        console.log(data);
    }
    return (
        <Formik
            initialValues={{
                name: "insert name here",
                email: "insert e-mail here",
            }}
            onSubmit={(data) => onSubmitfn(data)}
        >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
                <div className="loginForm">
                    <Form className="loginForm__form">
                        <div className="loginForm__field">
                            <label>Email</label>
                            <Field name="name" type="input" />
                        </div>

                        <div className="loginForm__field">
                            <label>Email</label>
                            <Field name="name" type="input" handleChange />
                        </div>

                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            )}
        </Formik>
    );
}

export default Login;
