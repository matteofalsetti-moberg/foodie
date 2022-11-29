import Button from "../Button/Button";

interface IModalFooter {
    onCloseModal: any;
}

function ModalFooter({ onCloseModal }: IModalFooter) {
    return (
        <div className="modal__footer">
            <Button onClick={onCloseModal} text="CLOSE" />
        </div>
    );
}

export default ModalFooter;
