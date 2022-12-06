import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/Item/Item";

function DishInfo() {
    const { id } = useParams();
    const [dish, setDish] = useState({ strMealThumb: "", strMeal: "" });

    useEffect(() => {
        async function fetchDishInfo() {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            const dish = await response.json();
            setDish(dish.meals[0]);
            console.log(dish);
        }
        fetchDishInfo();
    }, []);

    return  <Item image={dish.strMealThumb} name={dish.strMeal} />;
}

export default DishInfo;
