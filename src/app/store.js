import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice.js"
// import counterReducer2 from "../features/fourActionsSlice.js"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    
})


