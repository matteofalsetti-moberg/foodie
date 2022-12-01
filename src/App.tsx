import Header from "./Containers/Header/Header";
import CategoriesPage from "./Pages/CategoriesPage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/RandomMeal";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<CategoriesPage />} />
                <Route path="/randomMeal" element={<AboutUs />} />
            </Routes>
        </div>
    );
}

export default App;
