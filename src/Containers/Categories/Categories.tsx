import Card from "../../components/Card/Card";
import CategoryItem from "./CategoryItem";
import "./Categories.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Categories() {
    const [categories, setCategories] = useState([{ name: "", image: "" }]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/categories.php`
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
        <div className="categories">
            {
                <>
                    <h1 className="categories__title">Categories</h1>
                    <div className="categories__items">
                        {categories.map((item) => {
                            return (
                                <Card key={item.name}>
                                    <CategoryItem
                                    onClick={() => navigate(`/${item.name}`)}
                                        name={item.name}
                                        image={item.image}
                                    />
                                </Card>
                            );
                        })}
                    </div>
                </>
            }
        </div>
    );
}

export default Categories;
