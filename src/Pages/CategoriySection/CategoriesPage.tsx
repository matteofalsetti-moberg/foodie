import Categories from "../../Containers/Categories/Categories";
import { Outlet } from "react-router-dom";

function CategoriesPage() {
    return (
        <div>
            <Categories />
            <Outlet />
        </div>
    );
}

export default CategoriesPage;
