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
            {text && <div>{text}</div>}
        </button>
    );
}

export default Button;
