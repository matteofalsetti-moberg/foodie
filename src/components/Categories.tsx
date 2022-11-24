import Card from "./Card";
import CategoryItem from "./CategoryItem";
import "./Categories.css";

import burger from "../assets/burger.jpg"
import salad from "../assets/salad.jpg";
import pizza from "../assets/pizza.jpg";
import beverage from "../assets/beverage.jpg"

const DUMMY_CATEGORIES = [
    {name: "Burgers", image: burger},
    {name: "Salads", image: salad},
    {name: "Pizza", image: pizza},
    {name: "Beverages", image: beverage}
]



function Categories(props: any){

    let id = 0;
    return (<>
    <h1 className="categoriesTitle">Categories</h1>
        <div className="categories">
            {DUMMY_CATEGORIES.map(item => {
                console.log(item.image)
                return (<Card >
                    <CategoryItem key={id++} name={item.name} image={item.image} />
                    </Card>
                )
            })}
        </div>
        </>
    )
}

export default Categories;