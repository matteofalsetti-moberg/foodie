import Card from "./Card"

function CategoryItem(props:any){
    return (<>
        <img className="category image" src={props.image} alt="Image not found" />
        <p className="category name">{props.name}</p>
        </>
    )
}

export default CategoryItem;