import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategory {
    category?: string;
    area?: string
    display: boolean;
}

const initialState: ICategory = { category: "",area: "", display: false };

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: { item: initialState },
    reducers: {
        setCategory: (state, action: PayloadAction<ICategory>) => {
            state.item.category = action.payload.category;
            state.item.display = action.payload.display;
        },
        setArea: (state, action: PayloadAction<ICategory>) => {
            state.item.area = action.payload.area;
            state.item.display = action.payload.display;
        },
    },
});

export const { setCategory, setArea } = categoriesSlice.actions;

export default categoriesSlice.reducer;
