import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { removeDish } from "../../Redux/Dishes";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Item from "../Categories/Item";

function ModalBody() {
    const dishList = useSelector((state: RootState) => state.dishes.items);
    const selectedDishes = dishList[0].name != "";
    const dispatch = useDispatch();


    return (
        <div className="modal__body">
            {selectedDishes ? (
                dishList.map((item) => (
                    <Card key={item.name}>
                        <div className="modal__elements">
                        <Item name={item.name} image={item.image} />
                        <div className="modal__buttonvalue">
                        <Button onClick={() => dispatch(removeDish({name: item.name, image: item.image}))} text="Remove" />
                        <div>{item.value}</div>
                        </div>
                        </div>
                    </Card>
                ))
            ) : (
                <div>NO SELECTED DISDHES</div>
            )}
        </div>
    );
}

export default ModalBody;
