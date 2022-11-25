import Card from "../Card/Card";
import Dish from "./Dish";
import "./DishesList.scss"

const DUMMY_Dishes = [{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},];
let id=0;


function DishesList(){
    return (<div className="disheslist">
        <h1 className="disheslist__title">Dishes</h1>
        <div className="disheslist__list" >
        {DUMMY_Dishes.map(item => {
                return (<Card key={id++}>
                    <Dish  key={id++} name={item.name} />
                    </Card>
                )
            })}
        </div>
        </div>
    )
}

export default DishesList;