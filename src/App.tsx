import Header from "./Containers/Header/Header";
import CategoriesPage from "./Pages/CategoriesPage";
import { Route, Routes } from "react-router-dom";
import RandomMeal from "./Pages/RandomMeal";
import LoginPage from "./Pages/LoginPage";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<CategoriesPage />} />
                <Route path="/randomMeal" element={<RandomMeal />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
