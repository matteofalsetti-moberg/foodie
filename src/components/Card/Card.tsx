import "./Card.scss";

export interface ICardProps {
    key?: string;
    children: JSX.Element;
    onClick?: () => any;
}

function Card(props: ICardProps) {
    return (
        <div key={props.key} className="card" onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default Card;
