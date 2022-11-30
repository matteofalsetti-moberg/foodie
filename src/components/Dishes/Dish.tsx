import { useDispatch } from "react-redux";
import { insertDish } from "../../Redux/Dishes";
import { addPrice } from "../../Redux/price";
import Button from "../Button/Button";
import Item from "../Item/Item";
import "./Dish.scss";

export interface IDishItem {
    image: string;
    name: string;
}

function Dish({ image, name }: IDishItem) {
    const dispatch = useDispatch();
    const realPrice = name.length;
    const price = `${realPrice} €`;


    function addToCart() {
        dispatch(insertDish({ name, image }));
        dispatch(addPrice(realPrice));
    }

    return (
        <div className="dishes">
            <Item name={name} image={image} />
            <div className="dishes__footer">
                <div className="dishes__price">{price}</div>
                <Button onClick={addToCart} text="ADD TO CART" />
            </div>
        </div>
    );
}

export default Dish;
