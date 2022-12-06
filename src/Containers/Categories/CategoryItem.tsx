import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/Categories";
import Item from "../../components/Item/Item";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

export interface ICategoryItemProp {
    image: string;
    name: string;
}

function CategoryItem({ image, name }: ICategoryItemProp) {
    const currentCategory = useSelector(
        (state: RootState) => state.categories.item.category
    );
    const dispatch = useDispatch();

    function sendCategories() {
        currentCategory == name
            ? dispatch(setCategory({ category: "", display: false }))
            : dispatch(setCategory({ category: name, display: true }));
    }

    return (
        <div className="categories__card" onClick={sendCategories}>
            <Item name={name} image={image} />
        </div>
    );
}

export default CategoryItem;
