import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";
import cart from "../assets/cart.png"
import Button from "../Button/Button";

function Header (){
    return (
        <div className="header">
            <button className="header__button" >MENU</button>
            <SearchBar />
            <button className="header__button" >Login</button>
            <button className="header__button" >Cart</button>
        </div>
    )
}

export default Header;