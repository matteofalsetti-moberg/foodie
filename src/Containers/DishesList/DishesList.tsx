import Card from "../../components/Card/Card";
import Dish from "./Dish";
import "./DishesList.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function DishesList() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const { category } = useParams();
    const [dishes, setDishes] = useState([{id:"", name: "", image: "" }]);
    function displayMoreInfo(id: string){
        navigate(`/home/dish/${id}`)
    }

    useEffect(() => {
        async function fetchDishes() {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
            );
            const data = await response.json();

            const fetchedDishes = await data.meals.map(
                (item: { idMeal: string; strMeal: string; strMealThumb: string; }) => ({
                    id: item.idMeal,
                    name: item.strMeal,
                    image: item.strMealThumb,
                })
            );
            setDishes(fetchedDishes);
        }
        fetchDishes();
    }, [category]);

    return (
        <div className="disheslist">
            <h1 className="disheslist__title">{t(category!)}</h1>
            <div className="disheslist__list">
                {category &&
                    dishes.map((item) => {
                        return (
                            <Card key={item.name} onClick={() => displayMoreInfo(item.id)} >
                                <Dish name={item.name} image={item.image} />
                            </Card>
                        );
                    })}
            </div>
        </div>
    );
}

export default DishesList;
