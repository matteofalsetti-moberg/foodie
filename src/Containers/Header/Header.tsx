import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Header.scss";
import munuIcon from "../../assets/menuIcon.png";
import loginIcon from "../../assets/loginIcon.png";
import cartIcon from "../../assets/cart.png";

interface IHeaderProps {
    onCartClick: any;
}

function Header({ onCartClick }: IHeaderProps) {
    return (
        <div className="header">
            <div className="header__buttons">
                <Button icon={munuIcon} />
            </div>
            <SearchBar />
            <div className="header__buttons">
                <Button icon={loginIcon} />
            </div>
            <div className="header__buttons">
                <Button onClick={onCartClick} icon={cartIcon} />
            </div>
        </div>
    );
}

export default Header;
