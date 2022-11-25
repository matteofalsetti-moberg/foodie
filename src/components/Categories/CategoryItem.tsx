import {useAppDispatch} from "../../components/features/hooks"
import {setCategories} from '../features/Categories'

type CategoryItemProp = {
    image: string,
    name: string,
}

function CategoryItem(props:CategoryItemProp){
    const dispatch = useAppDispatch();

    function sendCategories(){
        dispatch(setCategories({category: props.name,display: true}))
    }

    return (<div className="categories__card" onClick={sendCategories}>
        <img className="categories__image" src={props.image} alt="Image not found" />
        <p>{props.name}</p>
        </div>
    )
}

export default CategoryItem;