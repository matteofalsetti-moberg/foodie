import { useDispatch } from "react-redux";
import { insertDish } from "../../Redux/Dishes";
import Button from "../Button/Button";

export interface IDishItem {
  image: string;
  name: string;
}

function Dish({ image, name }: IDishItem) {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(insertDish({name, image }));
  }

  return (
    <div className="categories__card">
      <img className="categories__image" src={image} alt="Image not found" />
      <div className="categories_text">{name}</div>
      <Button onClick={addToCart} text="ADD TO CART" />
    </div>
  );
}

export default Dish;
