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
    const truncatedName = name.length > 15 ? name.substring(0,15).concat("...") : name;


    function addToCart() {
        dispatch(insertDish({ name, image, count: 1, price: realPrice }));
    }

    return (
        <div className="dishes">
            <Item name={truncatedName} image={image} />
            <div className="dishes__footer">
                <Button onClick={addToCart} text="ADD" />
                <div>{realPrice +"€" }</div>
            </div>
        </div>
    );
}

export default Dish;
