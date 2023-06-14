// import {createStore} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
// import rootReducer from "./reducer";
//
// const composedEnhancers = composeWithDevTools()
//
// const store = createStore(rootReducer, composedEnhancers)
//
// export default store

import {configureStore} from "@reduxjs/toolkit";
import filtersSlice from "../Filters/filtersSlice";
import todoSlice from "../TodoList/todoSlice";

const store = configureStore({
    reducer: {filters: filtersSlice.reducer, todoList: todoSlice.reducer}
})

export default store