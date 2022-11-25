type DishType = {
    name: string,
    key: number
}

function Dish(props:DishType){
    return (
        <p key={props.key} >{props.name}</p>
    )
}

export default Dish;