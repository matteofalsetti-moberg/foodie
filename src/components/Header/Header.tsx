import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";
import munuIcon from "../../assets/menuIcon.png";
import loginIcon from "../../assets/loginIcon.png";
import cartIcon from "../../assets/cart.png";

interface IHeaderProps{
    onCartClick: any,
}

function Header({onCartClick}: IHeaderProps) {
    return (
        <div className="header">
            <Button icon={munuIcon} />
            <SearchBar />
            <Button icon={loginIcon} />
            <Button onClick={onCartClick} icon={cartIcon} />
        </div>
    );
}

export default Header;
