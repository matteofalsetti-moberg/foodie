import Header from "./Containers/Header/Header";
import CategoriesPage from "./Pages/CategoriySection/CategoriesPage";
import { Route, Routes } from "react-router-dom";
import RandomMeal from "./Pages/RandomMeal/RandomMeal";
import LoginPage from "./Pages/LoginUser/LoginPage";
import DishesList from "./Containers/DishesList/DishesList";
import Welcome from "./Containers/Welcome/Welcome";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
            <Route path="" element={<CategoriesPage /> } />
                <Route path="home" element={<CategoriesPage /> } >
                    <Route path=":category" element={<DishesList />} />
                    <Route path="welcome/:name" element={<Welcome />} />
                    
                </Route>
                <Route path="/randomMeal" element={<RandomMeal />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
