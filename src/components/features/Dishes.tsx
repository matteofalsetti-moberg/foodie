import {createSlice} from '@reduxjs/toolkit';
const initialDishesState = {dishes: "none"};


export const dishesSlice = createSlice({
    name: "dishes",
    initialState: {value: initialDishesState},
    reducers: {
        setDishes: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {setDishes} = dishesSlice.actions;

export default dishesSlice.reducer;