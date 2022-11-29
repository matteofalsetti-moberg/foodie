import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/Categories";

export interface ICategoryItemProp {
  image: string;
  name: string;
}

function CategoryItem({image, name}: ICategoryItemProp) {
  const dispatch = useDispatch();

  function sendCategories() {
    dispatch(setCategory({ category: name, display: true }));
  }

  return (
    <div className="categories__card" onClick={sendCategories}>
      <img
        className="categories__image"
        src={image}
        alt="Image not found"
      />
      <div className="categories_text">{name}</div>
    </div>
  );
}

export default CategoryItem;
