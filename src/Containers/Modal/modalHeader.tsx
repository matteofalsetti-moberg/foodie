import { useTranslation } from "react-i18next";

function ModalHeader() {
    const {t} = useTranslation();
    return <div className="modal__header">{t("Cart")}</div>;
}

export default ModalHeader;
