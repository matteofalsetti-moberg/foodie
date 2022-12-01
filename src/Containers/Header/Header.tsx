import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Header.scss";
import munuIcon from "../../assets/menuIcon.png";
import loginIcon from "../../assets/loginIcon.png";
import cartIcon from "../../assets/cart.png";
import { useState } from "react";
import ReactDOM from "react-dom";
import ModalCart from "../Modal/ModalCart/ModalCart";
import {NavLink} from 'react-router-dom'

function Header() {
    const [displayModal, setDisplayModal] = useState(false);

    function seeCart() {
        setDisplayModal(true);
    }
    function closeCart() {
        setDisplayModal(false);
    }

    return (
        <div className="header">
            {displayModal &&
                document.getElementById("modal-root") &&
                ReactDOM.createPortal(
                    <ModalCart onCloseModal={closeCart} />,
                    document.getElementById("modal-root")!
                )}
                <NavLink to="/">CATEGORIES</NavLink>
                <NavLink to="/aboutUs" >ABOUT US</NavLink>

            <div className="header__buttons">
                <Button icon={munuIcon} />
            </div>
            <SearchBar />
            <div className="header__buttons">
                <Button icon={loginIcon} />
            </div>
            <div className="header__buttons">
                <Button onClick={seeCart} icon={cartIcon} />
            </div>
        </div>
    );
}

export default Header;
