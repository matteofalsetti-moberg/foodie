import React from "react";
import SearchBar from "./SearchBar";
import "./Header.css";

function Header (){
    return (
        <div className="Header">
            <button>MENU</button>
            <SearchBar />
            <button>Login</button>
            <button>Cart</button>
        </div>
    )
}

export default Header;