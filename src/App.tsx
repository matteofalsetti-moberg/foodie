import Header from "./Containers/Header/Header";
import CategoriesPage from "./Pages/CategoriesPage";
import AboutUs from "./Pages/AboutUs";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<CategoriesPage />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
        </div>
    );
}

export default App;
