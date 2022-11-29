import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import Card from "../Card/Card";
import Item from "../Categories/Item";

function ModalBody() {
    const dishList = useSelector((state: RootState) => state.dishes.items);
    const selectedDishes = dishList[0].name != "";

    return (
        <div className="modal__body">
            {selectedDishes ? (
                dishList.map((item) => (
                    <Card key={item.name}>
                        <>
                        <Item name={item.name} image={item.image} />
                        <button> Remove this Dish</button>
                        <div>{item.value}</div>
                        </>
                    </Card>
                ))
            ) : (
                <div>NO SELECTED DISDHES</div>
            )}
        </div>
    );
}

export default ModalBody;
