import React from "react";

interface IFormField {
    labelName: string;
    placeholder: string;
}

function FormField({ labelName, placeholder }: IFormField) {
    return (
        <>
            <div>
                <label>{labelName}</label>
            </div>
            <input placeholder={placeholder}/>
        </>
    );
}

export default FormField;
