import { RootState } from "../../Redux/Store";
import Categories from "../../Containers/Categories/Categories";
import { useSelector } from "react-redux";
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
