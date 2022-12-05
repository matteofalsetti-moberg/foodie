import React from "react";
import "./FormField.scss"

interface IFormField {
    labelName: string;
}

function FormField({ labelName, ...props}: IFormField) {
    return (
        <>
            <div className="formfield">
                <h1 className="formfield__label">{labelName}</h1>
            </div>
            <input {...props}/>
        </>
    );
}

export default FormField;
