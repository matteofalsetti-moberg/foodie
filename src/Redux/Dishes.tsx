import { createSlice } from "@reduxjs/toolkit";
const initialDishesState: Array<IDish> = [];

export interface IDish {
  name: string;
  image: string;
}

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: { items: initialDishesState },
  reducers: {
    insertDish: (state, action) => {
      state.items = [...state.items, action.payload];
      console.log(state.items);
    },
  },
});

export const { insertDish } = dishesSlice.actions;

export default dishesSlice.reducer;
