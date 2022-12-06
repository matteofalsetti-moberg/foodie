import Card from "../../components/Card/Card";
import Dish from "./Dish";
import "./DishesList.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DishesList() {
    const { category } = useParams();
    const [dishes, setDishes] = useState([{ name: "", image: "" }]);

    useEffect(() => {
        async function fetchDishes() {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
            );
            const data = await response.json();

            const fetchedDishes = await data.meals.map(
                (item: { strMeal: string; strMealThumb: string }) => ({
                    name: item.strMeal.trim(),
                    image: item.strMealThumb,
                })
            );
            setDishes(fetchedDishes);
        }
        fetchDishes();
    }, [category]);

    return (
        <div className="disheslist">
            <h1 className="disheslist__title">{category}</h1>
            <div className="disheslist__list">
                {category &&
                    dishes.map((item) => {
                        return (
                            <Card key={item.name}>
                                <Dish name={item.name} image={item.image} />
                            </Card>
                        );
                    })}
            </div>
        </div>
    );
}

export default DishesList;
