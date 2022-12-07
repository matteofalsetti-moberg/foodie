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
            <h1 className="item__text">{t(name)}</h1>
        </div>
    );
}

export default Item;
