import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategory {
    category: string;
    display: boolean;
}

const initialState: ICategory = { category: "", display: false };

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: { item: initialState },
    reducers: {
        setCategory: (state, action: PayloadAction<ICategory>) => {
            state.item.category = action.payload.category;
            state.item.display = action.payload.display;
        },
        resetCategory: (state)=>{
            state.item = initialState;
        }
    },
});

export const { setCategory,resetCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
