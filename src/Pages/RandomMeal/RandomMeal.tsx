import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Dish from "../../Containers/DishesList/Dish";
import "./RandomMeal.scss"

function RandomMeal() {
    const [randomDish, setRandomDish] = useState({
        id: "",
        name: "TEST",
        image: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    });

    useEffect(() => {
        async function fetchRandomDish() {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/random.php`
            );
            const data = await response.json();
            const fetchedDishes = {
                id: data.meals[0].strId,
                name: data.meals[0].strMeal,
                image: data.meals[0].strMealThumb,
            };
            setRandomDish(fetchedDishes);
        }
        fetchRandomDish();
    }, []);

    return (<div className="randomMeal">
        <Card>
            <Dish  id={randomDish.id} name={randomDish.name} image={randomDish.image} />
        </Card>
        </div>
    );
}

export default RandomMeal;
