import React from "react";
import { Field, Formik, Form } from "formik";
import "./LoginPage.scss";
import { Button } from "react-bootstrap";
import FormField from "../../components/FormField/FormField";
import { useDispatch } from "react-redux";
import { login, logout } from "../../Redux/User";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface ILogin {
    firstName: string;
    lastName: string;
    email: string;
    cardNumber: string;
}

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSubmitfn(data: ILogin) {
        dispatch(login(data));
        navigate("/");
    }

    function logoutHandler() {
        dispatch(logout());
      // navigate("/");
    }

    const inputValidation = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        lastName: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        cardNumber: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(16, "Too short").max(16, "Too long")
    });

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                cardNumber: "",
            }}
            onSubmit={(data) => onSubmitfn(data)}
            validationSchema={inputValidation}
        >
            {({ errors, touched }) => (
                <div className="loginForm">
                    <Form className="loginForm__form">
                        <div className="loginForm__field">
                            <Field
                                name="firstName"
                                type="input"
                                labelName="First name"
                                placeholder="John"
                                as={FormField}
                            />
                            {errors.firstName && touched.firstName ? (
                                <div>{errors.firstName}</div>
                            ) : null}
                        </div>

                        <div className="loginForm__field">
                            <Field
                                name="lastName"
                                type="input"
                                labelName="Last name"
                                placeholder="Brown"
                                as={FormField}
                            />
                            {errors.lastName && touched.lastName ? (
                                <div>{errors.lastName}</div>
                            ) : null}
                        </div>

                        <div className="loginForm__field">
                            <Field
                                name="email"
                                type="input"
                                labelName="e-mail"
                                placeholder="john.brown@gmail.com"
                                as={FormField}
                            />
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        </div>

                        <div className="loginForm__field">
                            <Field
                                name="cardNumber"
                                type="input"
                                labelName="Card number"
                                placeholder="123# #### #### ####"
                                as={FormField}
                            />
                            {errors.cardNumber && touched.cardNumber ? (
                                <div>{errors.cardNumber}</div>
                            ) : null}
                        </div>
                        <div className="loginForm__buttons">
                            <Button type="submit">Submit</Button>
                            <Button onClick={logoutHandler}>Logout</Button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
}

export default Login;
