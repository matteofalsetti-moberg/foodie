import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";
import { insertDish, removeDish } from "../../../Redux/Dishes";

import Button from "../../../components/Button/Button";
import plus from "../../../assets/plus.png";
import minus from "../../../assets/minus.png";

function ModalBody() {
    const dishList = useSelector((state: RootState) => state.dishes.items);
    const dispatch = useDispatch();

    return (
        <div className="modal__body">
            {dishList.length ? (
                dishList.map((item) => (
                    <div className="modal__elements" key={item.name}>
                        <div className="modal__name">{item.name}</div>
                        <div className="modal__display">
                            <Button
                                icon={minus}
                                onClick={() =>
                                    dispatch(
                                        removeDish({
                                            name: item.name,
                                            image: item.image,
                                            count: 1,
                                            price: item.name.length,
                                        })
                                    )
                                }
                            />
                            <Button
                                onClick={() =>
                                    dispatch(
                                        insertDish({
                                            name: item.name,
                                            image: item.image,
                                            count: 1,
                                            price: item.name.length,
                                        })
                                    )
                                }
                                icon={plus}
                            />
                            <div className="modal__counter">
                                {" "}
                                {item.count} × {item.price}€
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>The cart is empty! Try to select some dishes</div>
            )}
        </div>
    );
}

export default ModalBody;
