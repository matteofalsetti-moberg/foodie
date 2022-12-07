import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { insertDish, removeDish } from "../../Redux/Dishes";

import Button from "../../components/Button/Button";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import { useTranslation } from "react-i18next";

function ModalBody() {
    const {t} = useTranslation()
    const dishList = useSelector((state: RootState) => state.dishes.items);
    const dispatch = useDispatch();

    function remove(item: { name: string; count: number; price: number }) {
        dispatch(
            removeDish({
                name: item.name,
                count: 1,
                price: item.name.length,
            })
        );
    }

    function add(item: {
        name: string;
        count: number;
        price: number;
        image: string;
    }) {
        dispatch(
            insertDish({
                name: item.name,
                image: item.image,
                count: 1,
                price: item.name.length,
            })
        );
    }

    return (
        <div className="modal__body">
            {dishList.length ? (
                dishList.map((item) => (
                    <div className="modal__elements" key={item.name}>
                        <div className="modal__name">{item.name}</div>
                        <div className="modal__display">
                            <Button icon={minus} onClick={() => remove(item)} />
                            <Button onClick={() => add(item)} icon={plus} />
                            <div className="modal__counter">
                                {" "}
                                {item.count} × {item.price}€
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>{t("theCartIsEmpty")}</div>
            )}
        </div>
    );
}

export default ModalBody;
