import { useDispatch } from 'react-redux';
import {setCategory} from '../../Redux/Categories'
import Button from '../Button/Button';

export interface IDishItem{
    image: string,
    name: string,
    onClick: any,
}

function Dish({image, name, onClick}: IDishItem){
    const dispatch = useDispatch();

    function sendCategories(){
        dispatch(setCategory({category: name,display: true}))
    }

    return (<div className="categories__card" onClick={sendCategories}>
        <img className="categories__image" src={image} alt="Image not found" />
        <div className="categories_text">{name}</div>
        <Button onClick={onClick} text='ADD TO CART' />
        </div>
    )
}

export default Dish;