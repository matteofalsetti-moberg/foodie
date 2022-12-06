import "./button.scss";

export interface IButtonPorps {
    icon?: string;
    text?: string;
    type?: "button" | "submit" | "reset";
    onClick?: any;
}

function Button({ icon, text, type, onClick }: IButtonPorps) {
    return (
        <button type={type} onClick={onClick} className="button">
            {icon && <img className="button__image" src={icon} />}
            {text && <h1 className="button__text">{text}</h1>}
        </button>
    );
}

export default Button;
