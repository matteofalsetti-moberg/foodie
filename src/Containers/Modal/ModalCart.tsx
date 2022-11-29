import ModalHeader from "../../components/Modal/modalHeader";
import ModalBody from "../../components/Modal/modalBody";
import ModalFooter from "../../components/Modal/modalFooter";
import "./ModalCart.scss";
import Card from "../../components/Card/Card";

interface IModalCart {
    onCloseModal: any;
}

function ModalCart({ onCloseModal }: IModalCart) {
    return (
        <div className="modal">
            <Card>
                <div className="modal__content">
                    <ModalHeader />
                    <ModalBody />
                    <ModalFooter onCloseModal={onCloseModal} />
                </div>
            </Card>
        </div>
    );
}

export default ModalCart;
