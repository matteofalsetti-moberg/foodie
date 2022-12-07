import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Header.scss";
import { useState } from "react";
import ReactDOM from "react-dom";
import ModalCart from "../Modal/ModalCart";
import DropdownMenu from "../dropdown/dropdownMenu";

import cartIcon from "../../assets/cart.png";
import eng from "../../assets/englandFlag.png";
import cro from "../../assets/croatianFlag.png";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import DisplayUser from "../DisplayUser/DisplayUser";
import DropdownLang from "../dropdown/dropdownLang";

function Header() {
    const [displayModal, setDisplayModal] = useState(false);
    const currentUser = useSelector((state: RootState) => state.user);
    console.log(!currentUser.state);
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
            <DisplayUser />
            <div className="header__buttons">
                <Button onClick={seeCart} icon={cartIcon} />
                <DropdownLang />
            </div>
        </div>
    );
}

export default Header;
