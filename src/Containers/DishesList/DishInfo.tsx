import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DishSpects from "./DishSpects";
import "./DishInfo.scss";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";

function DishInfo() {
    const {t} = useTranslation();
    const { id } = useParams();
    const [dish, setDish] = useState({
        strMealThumb: "",
        strMeal: "",
        strCategory: "",
        strArea: "",
        strTags: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        
        async function fetchDishInfo() {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            const dish = await response.json();
            setDish(dish.meals[0]);
            console.log(dish);
        }
        fetchDishInfo();
    }, []);

    return (
        <div className="dishInfo">
            <div className="dishInfo__card">
                <img
                    className="dishInfo__img"
                    src={dish.strMealThumb}
                    alt="Image not found"
                />
                <div>
                <DishSpects spectCategory={t("Name")} spectValue={dish.strMeal} />
                <DishSpects spectCategory={t("Category")} spectValue={dish.strCategory} />
                <DishSpects spectCategory={t("Region")} spectValue={dish.strArea} />
                <DishSpects spectCategory={t("Tag")} spectValue={dish.strTags} />
                </div>
                <Button text={"return"} onClick={() => navigate(`/home/${dish.strCategory}`)} />
            </div>
        </div>
    );
}

export default DishInfo;
