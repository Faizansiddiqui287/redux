import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/TodoReducer";


const store = configureStore({
    reducer: todoReducer
})

export default store;
