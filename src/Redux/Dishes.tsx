import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDish {
    name: string;
    image: string;
}

export const initialState: IDish = { name: "", image: "" };

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: { items: [initialState] },
    reducers: {
        insertDish: (state, action: PayloadAction<IDish>) => {
            state.items[0].name == "" ? state.items = [action.payload] : state.items = [...state.items, action.payload]
            console.log(state.items);
        }
    },
});

export const { insertDish } = dishesSlice.actions;

export default dishesSlice.reducer;
