import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { DropdownButton } from "react-bootstrap";


function DropdownMenu() {
  
    return (
        <DropdownButton variant="secondary" title="Menu">
            <Dropdown.Item >
                <Link to="/">Catagories</Link>
            </Dropdown.Item>
            <Dropdown.Item >
                <Link to="/aboutus">About us</Link>
            </Dropdown.Item>
        </DropdownButton>
    );
}

export default DropdownMenu;
