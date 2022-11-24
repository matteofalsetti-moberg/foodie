

type CategoryItemProp = {
    image: string,
    name: string
}

function CategoryItem(props:CategoryItemProp){
    return (<>
        <img className="categories__image" src={props.image} alt="Image not found" />
        <p className="categories__name">{props.name}</p>
        </>
    )
}

export default CategoryItem;