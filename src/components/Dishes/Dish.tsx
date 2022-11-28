export interface IDishType{
    name: string,
}

function Dish(props: IDishType){
    return (
        <p >{props.name}</p>
    )
}

export default Dish;