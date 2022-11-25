import Card from "../Card/Card";
import CategoryItem from "./CategoryItem";
import "./Categories.scss";
import { useAppSelector, useAppDispatch } from "../features/hooks"; 
import {setCategories} from '../features/Categories'


import burger from "../../assets/burger.jpg"
import salad from "../../assets/salad.jpg"
import pizza from "../../assets/pizza.jpg"
import beverage from "../../assets/beverage.jpg"
import { useEffect } from "react";

const DUMMY_CATEGORIES = [  //after we can fetch the categories
    {name: "Burgers", image: burger},
    {name: "Salads", image: salad},
    {name: "Pizza", image: pizza},
    {name: "Beverages", image: beverage}
];

function Categories(){
    const categories = useAppSelector( (state) => state.categories.value);
    const dispatch = useAppDispatch();

   // useEffect( () => {
   //     dispatch(setCategories(DUMMY_CATEGORIES))}, [])


    let id=0;
    return (
        <div  className="categories">
        <h1 className="categories__title" >Categories</h1>
        <div className="categories__items">
                {DUMMY_CATEGORIES.map(item => {
                return (<Card  key={id++} >
                    <CategoryItem name={item.name} image={item.image} />
                    </Card>
                )
            })}
            </div>
        </div>
    )
}

export default Categories;