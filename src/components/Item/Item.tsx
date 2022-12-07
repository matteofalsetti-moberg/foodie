import { useTranslation } from "react-i18next";
import "./Item.scss";
export interface IDishItem {
    image: string;
    name: string;
}

function Item({ image, name }: IDishItem) {
    const {t} = useTranslation()
    return (
        <div className="item">
            <img className="item__image" src={image} alt="Image not found" />
            <div>{t(name)}</div>
        </div>
    );
}

export default Item;
