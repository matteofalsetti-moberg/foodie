
import "./Card.scss"

export interface ICardProps{
    key: number,
    children: JSX.Element,

}

function Card(props: ICardProps){

    return(<div  key={props.key || 0} className="card" >{props.children}</div>)
}

export default Card;