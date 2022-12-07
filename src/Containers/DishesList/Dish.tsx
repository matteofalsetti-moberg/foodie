import { useDispatch } from "react-redux";
import { insertDish } from "../../Redux/Dishes";
import Button from "../../components/Button/Button";
import Item from "../../components/Item/Item";
import "./Dish.scss";
import { useTranslation } from "react-i18next";

export interface IDishProp {
    image: string;
    name: string;
}

function Dish({ image, name }: IDishProp) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const realPrice = name.length;
    const truncatedName =
        name.length > 30 ? name.substring(0, 30).concat("...") : name;

    function addToCart() {
        dispatch(insertDish({ name, image, count: 1, price: realPrice }));
    }

    return (
        <div className="dishes">
            <Item name={truncatedName} image={image} />
            <div className="dishes__footer">
                <Button onClick={addToCart} text={`${t("ADD")}`} />
                <div>{realPrice + "€"}</div>
            </div>
        </div>
    );
}

export default Dish;
