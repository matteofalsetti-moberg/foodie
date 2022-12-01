import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Header.scss";
import { useState } from "react";
import ReactDOM from "react-dom";
import ModalCart from "../Modal/ModalCart/ModalCart";
import DropdownMenu from "../dropdown/dropdown";


import loginIcon from "../../assets/loginIcon.png";
import cartIcon from "../../assets/cart.png";

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

            <DropdownMenu />
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
