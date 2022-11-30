import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./Categories";
import disesReducer from "./Dishes";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        dishes: disesReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
