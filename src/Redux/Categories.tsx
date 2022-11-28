import { createSlice } from '@reduxjs/toolkit';


export const categoriesSlice = createSlice({
    name: "categories",
    initialState: { value: {category: "", display: false}},
    reducers: {
        setCategory: (state, action) => {
            state.value = action.payload;
        }
    }

})

export const {setCategory} = categoriesSlice.actions;

export default categoriesSlice.reducer;