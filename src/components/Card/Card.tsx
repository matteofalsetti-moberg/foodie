import { setCategories } from "../features/Categories";
import "./Card.scss"

type CardProps={
    key: number,
    children: JSX.Element,

}

function Card(props: CardProps){

    return(<div  key={props.key || 0} className="card" >{props.children}</div>)
}

export default Card;