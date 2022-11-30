import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategory {
    category: string;
    display: boolean;
}

const initialState: ICategory = { category: "", display: false }

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: { item: initialState},
    reducers: {
        setCategory: (state, action: PayloadAction<ICategory>) => {
            state.item = action.payload;
        },
    },
});

export const { setCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
