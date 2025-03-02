import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/Todo/TodoSlics.js"



export const store = configureStore({
    reducer: todoReducer
})