import React from "react";
import { Formik } from "formik";
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
                email: "insrt e-mail here",
            }}
            onSubmit={(data) => onSubmitfn(data)}
        >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
                <div className="loginForm">
                    <form className="loginForm__form" onSubmit={handleSubmit}>
                        <div className="loginForm__field">
                            <label>Full Name</label>
                            <input
                                type="name"
                                name="name"
                                onChange={handleChange}
                                value={values.name}
                            ></input>
                        </div>

                        <div className="loginForm__field">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                            ></input>
                        </div>

                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            )}
        </Formik>
    );
}

export default Login;
