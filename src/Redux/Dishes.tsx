import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDishItem } from "../components/Dishes/Dish";

export interface IDishReducer {
    name: string;
    image: string;
    value: number;
}

export const initialState: IDishReducer = { name: "", image: "", value: 0 };

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: { items: [initialState] },
    reducers: {
        insertDish: (state, action: PayloadAction<IDishItem>) => {
            const item: IDishReducer = { ...action.payload, value: 1 };
            const itemIndex = state.items.findIndex(
                (obj) => obj.name == item.name
            );

            if (itemIndex != -1) {
                state.items[itemIndex].value++;
            } else {
                if (state.items[0].name == "") {
                    state.items = [item];
                    return;
                }
                state.items = [...state.items, item];
            }
        },
    },
});

export const { insertDish } = dishesSlice.actions;

export default dishesSlice.reducer;
