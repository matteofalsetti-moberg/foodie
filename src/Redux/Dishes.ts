import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDishReducer {
    name: string;
    image: string;
    count: number;
    price: number;
}

const initialState: IDishReducer[] = [];

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: { items: initialState, totalPrice: 0 },
    reducers: {
        insertDish: (state, action: PayloadAction<IDishReducer>) => {
            const itemIndex = state.items.findIndex(
                (obj) => obj.name == action.payload.name
            );

            if (itemIndex >= 0) {
                state.items[itemIndex].count += action.payload.count;
            } else {
                state.items = [...state.items, action.payload];
            }
            state.totalPrice += action.payload.price * action.payload.count;
        },
        removeDish: (state, action: PayloadAction<{name: string, count: number, price: number}>) => {
            const itemIndex = state.items.findIndex(
                (obj) => obj.name == action.payload.name
            );

            if (state.items[itemIndex].count > 1) {
                state.items[itemIndex].count -= action.payload.count;
                state.totalPrice -= action.payload.price * action.payload.count;
                return;
            } else {
                state.items.splice(itemIndex, 1);
                state.totalPrice -= action.payload.price * action.payload.count;
            }
        },
        removeAllDishes: (state) => {
            state.items = initialState;
            state.totalPrice = 0;
        }
    },
});

export const { insertDish, removeDish, removeAllDishes} = dishesSlice.actions;

export default dishesSlice.reducer;
