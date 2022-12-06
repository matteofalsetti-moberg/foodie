import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    cardNumber: string;
}

const initialState: IUser = <IUser>{};

export const userSlice = createSlice({
    name: "user",
    initialState: {state: initialState },
    reducers: {
        login: (state, action: PayloadAction<IUser>) => {
            state.state = action.payload;
        },
        logout: (state) => {
            state.state = initialState;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
