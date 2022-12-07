import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import "./dropdownMenu.scss";
import i18next from "../../Translation";




function DropdownLang() {
  function changeLang(lang: "en" | "hr") {
    i18next.changeLanguage(lang);
}

    return (
        <DropdownButton variant="dropMenu" title="Language">
            <Dropdown.Item
                className="dropMenu__link"
                onClick={() => changeLang("en")}
            >
                English
            </Dropdown.Item>
            <Dropdown.Item
                className="dropMenu__link"
                onClick={() => changeLang("hr")}
            >
                Croatian
            </Dropdown.Item>
        </DropdownButton>
    );
}

export default DropdownLang;
