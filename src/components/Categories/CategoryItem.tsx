import {useAppDispatch} from "../../components/features/hooks"
import {setCategories} from '../features/Categories'

type CategoryItemProp = {
    image: string,
    name: string,
}

function CategoryItem(props:CategoryItemProp){
    const dispatch = useAppDispatch();

    function sendCategories(){
        dispatch(setCategories(props.name))
    }

    return (<div onClick={sendCategories}>
        <img className="categories__image" src={props.image} alt="Image not found" />
        <p className="categories__name">{props.name}</p>
        </div>
    )
}

export default CategoryItem;