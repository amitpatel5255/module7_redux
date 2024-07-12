import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";


const store = configureStore({
    reducer: {
        count: reducer
    }
})

export default store;