import ModalHeader from "./modalHeader";
import ModalBody from "./modalBody";
import ModalFooter from "./modalFooter";
import "./ModalCart.scss";

interface IModalCart {
    onCloseModal: any;
}

function ModalCart({ onCloseModal }: IModalCart) {
    return (
        <div className="modal">

                <div className="modal__content">
                    <ModalHeader />
                    <ModalBody />
                    <ModalFooter onCloseModal={onCloseModal} />
                </div>

        </div>
    );
}

export default ModalCart;
