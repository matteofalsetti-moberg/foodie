import "./Item.scss";
export interface IDishItem {
    image: string;
    name: string;
}

function Item({ image, name }: IDishItem) {
    return (
        <div className="item">
            <img className="item__image" src={image} alt="Image not found" />
            <div >{name}</div>
        </div>
    );
}

export default Item;
