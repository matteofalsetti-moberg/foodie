import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import { DropdownButton } from "react-bootstrap";
import "./dropdownMenu.scss"


function DropdownMenu() {
  
    return (
        <DropdownButton variant="secondary" title="Menu">
            <Dropdown.Item >
                <NavLink className="dropMenu__link" to="/">Catagories</NavLink>
            </Dropdown.Item>
            <Dropdown.Item >
                <NavLink className="dropMenu__link" to="/randomMeal">RandomMeal</NavLink>
            </Dropdown.Item>
        </DropdownButton>
    );
}

export default DropdownMenu;
