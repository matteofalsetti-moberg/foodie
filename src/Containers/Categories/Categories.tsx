import Card from "../../components/Card/Card";
import CategoryItem from "../../components/Categories/CategoryItem";
import "./Categories.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

function Categories() {
    const [categories, setCategories] = useState([{ name: "", image: "" }]);
    const currentCategory = useSelector(
        (state: RootState) => state.categories.item
    );

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch(
                "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
            const data = await response.json();

            const fetchedCategories = await data.categories.map(
                (item: { strCategory: string; strCategoryThumb: string }) => ({
                    name: item.strCategory,
                    image: item.strCategoryThumb,
                })
            );
            setCategories(fetchedCategories);
        }

        fetchCategories();
    }, []);

    return (
        //don't like the solution with categories[0].name
        <div className="categories">
            {!!currentCategory && (
                <>
                    <h1 className="categories__title">Categories</h1>
                    <div className="categories__items">
                        {categories.map((item) => {
                            return (
                                <Card key={item.name}>
                                    <CategoryItem
                                        name={item.name}
                                        image={item.image}
                                    />
                                </Card>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
}

export default Categories;
