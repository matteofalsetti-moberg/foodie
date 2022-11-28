import { useDispatch } from 'react-redux';
import {setCategory} from '../../Redux/Categories'

export interface IDishItem{
    image: string,
    name: string,
}

function Dish(props: IDishItem){
    const dispatch = useDispatch();

    function sendCategories(){
        dispatch(setCategory({category: props.name,display: true}))
    }

    return (<div className="categories__card" onClick={sendCategories}>
        <img className="categories__image" src={props.image} alt="Image not found" />
        <div className="categories_text">{props.name}</div>
        <button>ADD TO CART</button>
        </div>
    )
}

export default Dish;