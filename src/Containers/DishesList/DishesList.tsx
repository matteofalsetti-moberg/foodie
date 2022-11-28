import Card from "../../components/Card/Card";
import Dish from "../../components/Dishes/Dish";
import CategoryItem from "../../components/Categories/CategoryItem";
import "./DishesList.scss"
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/categoryStore";
import {useEffect, useState} from "react"

const DUMMY_Dishes = [{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},];
let id=0;

export interface IDishesListProp{
    category: string
}




function DishesList(props: IDishesListProp){
    const currentCategory = useSelector((state: RootState) => state.categories.value);
    const [dishes, setDishes] = useState([{ name: "", image: ""}]);

    

          useEffect( () => {
            async function fetchDishes(){
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${currentCategory.category}`);
                const data = await response.json();
              
             const fetchedDishes = await  data.meals.map(
                (item: { strMeal: string; strMealThumb: string; }) => ({name: item.strMeal, image: item.strMealThumb}));
                setDishes(fetchedDishes);
              }
            fetchDishes();

          }, [currentCategory])

 
    return (<div className="disheslist">
        <h1 className="disheslist__title">{props.category}</h1>
        <div className="disheslist__list" >
        {currentCategory.display && dishes.map(item => {
                return (<Card key={id++}>
                    <Dish name={item.name} image={item.image} />
                    </Card>
                )
            })}
        </div>
        </div>
    )
}

export default DishesList;