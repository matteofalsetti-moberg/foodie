import { createSlice } from '@reduxjs/toolkit';


export const categoriesSlice = createSlice({
    name: "categories",
    initialState: { value: {category: "", display: false}},
    reducers: {
        setCategories: (state,action) => {
            state.value = action.payload;
            console.log(state.value)
        }
    }

})

export const {setCategories} = categoriesSlice.actions;

export default categoriesSlice.reducer;