import Item from "../../components/Item/Item";

export interface ICategoryItemProp {
    image: string;
    name: string;
    onClick: () => any;
}

function CategoryItem({ onClick, image, name }: ICategoryItemProp) {
    return (
        <div className="categories__card" onClick={onClick}>
            <Item name={name} image={image} />
        </div>
    );
}

export default CategoryItem;
