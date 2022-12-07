import React from "react";

interface IDishSpectsPorop {
    spectCategory: string;
    spectValue: string;
}

function DishSpects({ spectCategory, spectValue }: IDishSpectsPorop) {
    return (
        <div className="dishInfo__spects">
            <h1 className="dishInfo__row">{spectCategory}: </h1>
            <h1 className="dishInfo__row">{spectValue}</h1>
        </div>
    );
}

export default DishSpects;
