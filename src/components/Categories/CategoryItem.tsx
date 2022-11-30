import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/Categories";
import Item from "../Item/Item";

export interface ICategoryItemProp {
    image: string;
    name: string;
}

function CategoryItem({ image, name }: ICategoryItemProp) {
    const dispatch = useDispatch();

    function sendCategories() {
        dispatch(setCategory({ category: name, display: true }));
    }

    return (
        <div className="categories__card" onClick={sendCategories}>
            <Item name={name} image={image}/>
        </div>
    );
}

export default CategoryItem;
