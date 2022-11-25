import Card from "../Card/Card";
import CategoryItem from "./CategoryItem";
import "./Categories.scss";
import { useEffect, useState } from "react";

import burger from "../../assets/burger.jpg"
import salad from "../../assets/salad.jpg"
import pizza from "../../assets/pizza.jpg"
import beverage from "../../assets/beverage.jpg"


let CATEGORIES = [  //after we can fetch the categories
    {name: "Burgers", image: burger},
    {name: "Salads", image: salad},
    {name: "Pizza", image: pizza},
    {name: "Beverages", image: beverage}

    
];

function Categories(){
    const [categories, setCategories] = useState([{name: "Burgers", image: burger}]);

    async function fetchSomeData(){
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await response.json();
      
      const fetchedCateories =await  data.categories.map(
        (item: { strCategory: string; strCategoryThumb: string; }) => ({name: item.strCategory,image: item.strCategoryThumb}));
        setCategories(fetchedCateories);
      }
      
      useEffect(()=>{
        fetchSomeData();
        console.log(categories)
      }, [])

    let id=0;
    return (
        <div  className="categories">
        <h1 className="categories__title" >Categories</h1>
        <div className="categories__items">
                {categories.map(item => {
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