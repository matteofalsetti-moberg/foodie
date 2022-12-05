import React from "react";
import { Field, Formik, Form } from "formik";
import "./LoginPage.scss";
import { Button } from "react-bootstrap";
import FormField from "../../components/FormField/FormField";

interface ILogin {
    name: string;
    email: string;
    cardNumber: string;
}

function Login() {
    function onSubmitfn(data: ILogin) {
        console.log(data);  //onSubmit insert in redux store
    }
    function checkValues(values: ILogin){
        console.log(values);  // implement YUP
    }

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                cardNumber: "",
            }}
            onSubmit={(data) => onSubmitfn(data)}
            validate={(values) => checkValues(values)}
        >
            {() => (
                <div className="loginForm">
                    <Form className="loginForm__form">
                        <div className="loginForm__field">
                            <Field
                                name="name"
                                type="input"
                                labelName="Full name"
                                placeholder="Inser full name here"
                                as={FormField}
                            />
                        </div>

                        <div className="loginForm__field">
                            <Field
                                name="email"
                                type="input"
                                labelName="e-mail"
                                placeholder="Insert e-mail here"
                                as={FormField}
                            />
                        </div>

                        <div className="loginForm__field">
                            <Field
                                name="cardNumber"
                                type="input"
                                labelName="Card number"
                                placeholder="Insert card number here"
                                as={FormField}
                            />
                        </div>

                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            )}
        </Formik>
    );
}

export default Login;
