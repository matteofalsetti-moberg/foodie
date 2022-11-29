import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDish {
    name: string;
    image: string;
}

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: { items: [{ name: "", image: "" }] },
    reducers: {
        insertDish: (state, action: PayloadAction<IDish>) => {
            state.items = [...state.items, action.payload];
        },
    },
});

export const { insertDish } = dishesSlice.actions;

export default dishesSlice.reducer;
