import { useDispatch } from "react-redux";
import { insertDish } from "../../Redux/Dishes";
import Button from "../../components/Button/Button";
import Item from "../../components/Item/Item";
import "./Dish.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export interface IDishProp {
    id: string,
    image: string;
    name: string;
}

function Dish({ id, image, name }: IDishProp) {
    const navigate = useNavigate()
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const realPrice = name.length;
    const truncatedName =
        name.length > 25 ? name.substring(0, 25).concat("...") : name;

    function addToCart() {
        dispatch(insertDish({ name, image, count: 1, price: realPrice }));
    }
    return (
        <div className="dishes">
            <Item name={truncatedName} image={image} />
            <div className="dishes__footer">
                <Button onClick={addToCart} text={`${t("ADD")}`} />
                <Button onClick={() => navigate(`/home/dish/${id}`)} text="moreAbout" />
                
            </div>
            <h1 className="dishes__price">{realPrice + "€"}</h1>
        </div>
    );
}

export default Dish;
