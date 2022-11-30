import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const priceSlice = createSlice({
    name: "price",
    initialState: { value: 0 },
    reducers: {
        addPrice: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        subtractPrice: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },
});

export const { addPrice } = priceSlice.actions;

export default priceSlice.reducer;
