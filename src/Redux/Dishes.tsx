import {createSlice} from '@reduxjs/toolkit';
const initialDishesState: Array<IDish> = [];

export interface IDish{
    strMeal: string; strMealThumb: string; }

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: {value: initialDishesState},
    reducers: {
        insertDish: (state, action) => {
            state.value = [...state.value, action.payload];

        }
    }
});

export const {insertDish} = dishesSlice.actions;

export default dishesSlice.reducer;