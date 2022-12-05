import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { DropdownButton } from "react-bootstrap";
import "./dropdownMenu.scss"


function DropdownMenu() {
  
    return (
        <DropdownButton className="dropMenu" variant="secondary" title="Menu">
            <Dropdown.Item as={Link} className="dropMenu__link" to="/">Catagories</Dropdown.Item>
            <Dropdown.Item as={Link} className="dropMenu__link" to="/randomMeal">RandomMeal</Dropdown.Item>
        </DropdownButton>
    );
}

export default DropdownMenu;
