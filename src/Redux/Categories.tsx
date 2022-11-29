import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategory{
    category: string,
    display: boolean
}

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: { item: { category: "", display: false } },
  reducers: {
    setCategory: (state, action: PayloadAction<ICategory>) => {
      state.item = action.payload;
    },
  },
});

export const { setCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
