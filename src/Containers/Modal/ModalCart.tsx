import ModalHeader from "../../components/Modal/modalHeader";
import ModalBody from "../../components/Modal/modalBody";
import ModalFooter from "../../components/Modal/modalFooter";
import "./ModalCart.scss"

interface IModalCart{
    onCloseModal: any,
}

function ModalCart({onCloseModal}: IModalCart){
    return (<div className="modal">
        <div className="modal__content" >
    <ModalHeader />
    <ModalBody />
    <ModalFooter onCloseModal={onCloseModal} />
    </div>
    </div>)
}

export default ModalCart;