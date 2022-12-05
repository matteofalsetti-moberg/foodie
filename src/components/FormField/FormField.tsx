import React from "react";

interface IFormField {
    labelName: string;
}

function FormField({ labelName, ...props}: IFormField) {
    return (
        <>
            <div>
                <label>{labelName}</label>
            </div>
            <input {...props}/>
        </>
    );
}

export default FormField;
