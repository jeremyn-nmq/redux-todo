import filtersReducer, {filterInitialState} from "../Filters/FiltersSlice";
import todoListReducer, {todoListInitialState} from "../TodoList/TodoListSlice";
import {combineReducers} from "redux";

// const initialState = {
//     filters: filterInitialState,
//     todoList: todoListInitialState
// }

// const rootReducer = (state=initialState, action:any):any => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({filters: filtersReducer, todoList: todoListReducer})

export default rootReducer
