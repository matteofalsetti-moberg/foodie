import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";
import Button from "../../../components/Button/Button";
import "./modalFooter.scss"

interface IModalFooter {
    onCloseModal: any;
}

function ModalFooter({ onCloseModal }: IModalFooter) {
    const realPrice = useSelector((state: RootState) => state.dishes.totalPrice);
    const price = `${realPrice} €`
    return (
        <div className="modalfooter">
            <div className="modalfooter__price" >{price}</div>
            <Button onClick={onCloseModal} text="CLOSE" />
        </div>
    );
}

export default ModalFooter;
