import { createSlice } from '@reduxjs/toolkit';

import burger from "../../assets/burger.jpg"
import salad from "../../assets/salad.jpg"
import pizza from "../../assets/pizza.jpg"
import beverage from "../../assets/beverage.jpg"

const initialState = [
    {name: "Burgers", image: burger},
    {name: "Beverages", image: beverage}
];

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: { value: [...initialState]},
    reducers: {
        setCategories: (state,action) => {
            state.value = action.payload;
        }
    }

})

export const {setCategories} = categoriesSlice.actions;

export default categoriesSlice.reducer;