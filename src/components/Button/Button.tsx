import { useTranslation } from "react-i18next";
import "./button.scss";

export interface IButtonPorps {
    icon?: string;
    text?: string;
    type?: "button" | "submit" | "reset";
    onClick?: ()=> any;
}

function Button({ icon, text, type, onClick }: IButtonPorps) {
    const {t} = useTranslation();
    return (
        <button type={type} onClick={onClick} className="button">
            {icon && <img className="button__image" src={icon} />}
            {text && <h1 className="button__text">{t(text)}</h1>}
        </button>
    );
}

export default Button;
