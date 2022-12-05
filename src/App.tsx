import Header from "./Containers/Header/Header";
import CategoriesPage from "./Pages/CategoriySection/CategoriesPage";
import { Route, Routes } from "react-router-dom";
import RandomMeal from "./Pages/RandomMeal/RandomMeal";
import LoginPage from "./Pages/LoginUser/LoginPage";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<CategoriesPage /> }  />
                <Route path="/randomMeal" element={<RandomMeal />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
