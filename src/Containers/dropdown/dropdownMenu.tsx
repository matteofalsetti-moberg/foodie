import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { DropdownButton } from "react-bootstrap";
import "./dropdownMenu.scss";
import { useTranslation } from "react-i18next";

function DropdownMenu() {
    const {t} = useTranslation()
    return (
        <DropdownButton variant="dropMenu" title="Menu">
            <Dropdown.Item as={Link} className="dropMenu__link" to="/home">
                {t("Catagories")}
            </Dropdown.Item>
            <Dropdown.Item
                as={Link}
                className="dropMenu__link"
                to="/randomMeal"
            >
                {t("RandomMeal")}
            </Dropdown.Item>
            <Dropdown.Item
                as={Link}
                className="dropMenu__link"
                to="/login"
            >
                {t("Login")}
            </Dropdown.Item>
        </DropdownButton>
    );
}

export default DropdownMenu;
