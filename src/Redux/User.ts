import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    fullName: string;
    email: string;
}

const initialState: IUser = {fullName:"", email: "" };

export const userSlice = createSlice({
    name: "user",
    initialState: { user: initialState },
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        }
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
