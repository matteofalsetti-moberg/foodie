import Card from "../Card/Card";
import CategoryItem from "./CategoryItem";
import "./Categories.scss";

import burger from "../../assets/burger.jpg"
import salad from "../../assets/salad.jpg";
import pizza from "../../assets/pizza.jpg";
import beverage from "../../assets/beverage.jpg"

const DUMMY_CATEGORIES = [
    {name: "Burgers", image: burger},
    {name: "Salads", image: salad},
    {name: "Pizza", image: pizza},
    {name: "Beverages", image: beverage}
]



function Categories(props: any){

    

    let id = 0;
    return (<>
  
        <div className="categories">
        <h1 className="categories__title">Categories</h1>
            <div className="categories__items">
                {DUMMY_CATEGORIES.map(item => {
                return (<Card >
                    <CategoryItem  key={id++} name={item.name} image={item.image} />
                    </Card>
                )
            })}
            </div>
        </div>
        </>
    )
}

export default Categories;