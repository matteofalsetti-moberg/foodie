import Card from "../Card/Card";

import Dish from "./Dish";

const DUMMY_Dishes = [{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},{name: "burger1"},];
let id=0;


function DishesList(){
    return (<div className="disheslist">
        <h1 className="dishesList__title">Dishes</h1>
        <div className="dishesList__List" >
        {DUMMY_Dishes.map(item => {
                return (<Card >
                    <Dish  key={id++} name={item.name} />
                    </Card>
                )
            })}
        </div>
        </div>
    )
}

export default DishesList;