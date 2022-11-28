import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";
import munuIcon from "../../assets/menuIcon.png"
import loginIcon from "../../assets/loginIcon.png";
import cartIcon from "../../assets/cart.png"


function Header (){
    return (
        <div className="header">
            <Button  icon={munuIcon} />
            <SearchBar />
            <Button  icon={loginIcon} />
            <Button  icon={cartIcon} />
        </div>
    )
}

export default Header;