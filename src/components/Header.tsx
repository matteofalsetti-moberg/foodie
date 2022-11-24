import React from "react";
import SearchBar from "./SearchBar";
import "./Header.scss";

function Header (){
    return (
        <div className="header">
            <button className="header__button">MENU</button>
            <SearchBar />
            <button className="header__button" >Login</button>
            <button className="header__button" >Cart</button>
        </div>
    )
}

export default Header;