interface IModalFooter{
    onCloseModal: any
}


function ModalFooter({onCloseModal}: IModalFooter) {
    return (
        <div className="modal__footer">
            <button onClick={onCloseModal}>CLOSE</button>
        </div>
    );
}

export default ModalFooter;
