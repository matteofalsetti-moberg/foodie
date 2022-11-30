import { useDispatch } from "react-redux";
import { insertDish } from "../../Redux/Dishes";
import Button from "../../components/Button/Button";
import Item from "../../components/Item/Item";
import "./Dish.scss";

export interface IDishProp {
    image: string;
    name: string;
}

function Dish({ image, name }: IDishProp) {
    const dispatch = useDispatch();
    const realPrice = name.length;


    function addToCart() {
        dispatch(insertDish({ name, image, count: 1, price: realPrice }));
    }

    return (
        <div className="dishes">
            <Item name={name} image={image} />
            <div className="dishes__footer">
                <Button onClick={addToCart} text="ADD TO CART" />
                <div>{`${realPrice} €`}</div>
            </div>
        </div>
    );
}

export default Dish;
