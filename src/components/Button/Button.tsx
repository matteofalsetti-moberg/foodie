
import "./button.scss"

export interface IButtonPorps{
    icon?: string,
    text?: string,
}

 function Button(props: IButtonPorps){
    return (
            <button className="button">
        {props.icon ? <img className="button__image" src={props.icon}/> : <div>{props.text}</div>}
    </button>)
};

export default Button;