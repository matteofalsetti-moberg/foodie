import "./Card.scss";

export interface ICardProps {
    key: string;
    children: JSX.Element;
}

function Card(props: ICardProps) {
    return (
        <div key={props.key} className="card">
            {props.children}
        </div>
    );
}

export default Card;
