import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import "./dropdownMenu.scss";
import i18next from "../../Translation";
import { useTranslation } from "react-i18next";
import eng from "../../assets/englandFlag.png";
import cro from "../../assets/croatianFlag.png";

function DropdownLang() {
    const { t } = useTranslation();
    function changeLang(lang: "en" | "hr") {
        i18next.changeLanguage(lang);
    }

    return (
        <DropdownButton variant="dropMenu" title={t("Lang")}>
            <Dropdown.Item
                className="dropMenu__link"
                onClick={() => changeLang("en")}
            >
                English
                <img className="dropMenu__img" src={eng} />
            </Dropdown.Item>
            <Dropdown.Item
                className="dropMenu__link"
                onClick={() => changeLang("hr")}
            >
                Hrvatski
                <img className="dropMenu__img" src={cro} />
            </Dropdown.Item>
        </DropdownButton>
    );
}

export default DropdownLang;
