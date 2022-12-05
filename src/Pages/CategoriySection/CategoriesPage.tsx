import { RootState } from "../../Redux/Store";
import Categories from "../../Containers/Categories/Categories";
import DishesList from "../../Containers/DishesList/DishesList";
import { useSelector } from "react-redux";

function CategoriesPage() {
    const selectedCategory = useSelector(
        (state: RootState) => state.categories.item.category
    );
    const displayDishes = useSelector(
        (state: RootState) => state.categories.item.display
    );

    return (
        <div>
            <Categories />
            {displayDishes && (
                <DishesList category={selectedCategory!}></DishesList>
            )}
        </div>
    );
}

export default CategoriesPage
