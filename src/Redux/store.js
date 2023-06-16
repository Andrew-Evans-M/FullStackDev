import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./fetchdata"
export const store = configureStore({
    reducer:{
        countrydata : userReducer
    }
})