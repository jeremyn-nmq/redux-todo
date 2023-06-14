// import {FILTERACTIONS} from "../helper/constants";
// import {IFilterPayload} from "../helper/interfaces";
// import {STATUS} from "../helper/enums";
//
// export const filterInitialState: IFilterPayload = {
//     search:'',
//     status: STATUS.ALL,
//     priorities: []
// }
//
// const filtersReducer = (state=filterInitialState, action:any) => {
//     switch (action.type) {
//         case FILTERACTIONS.SEARCH_TODO:
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case FILTERACTIONS.STATUS_CHANGE: {
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         }
//         case FILTERACTIONS.PRIORITY_CHANGE: {
//             return {
//                 ...state,
//                 priorities: action.payload.priorities
//             }
//         }
//         default:
//             return state
//     }
// }
//
// export default filtersReducer

import {createSlice} from "@reduxjs/toolkit";
import {IFilterPayload} from "../helper/interfaces";
import {STATUS} from "../helper/enums";
// import {priorityFilterChange, searchFilterChange, statusFilterChange} from "../redux/actions";
import {FILTERACTIONS} from "../helper/constants";

const initialState: IFilterPayload = {
    search:'',
    status: STATUS.ALL,
    priorities: []
}

const filtersSlice: any = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        [FILTERACTIONS.SEARCH_TODO]: (state, action) => {state.search = action.payload},
        [FILTERACTIONS.STATUS_CHANGE]: (state, action) => {state.status = action.payload},
        [FILTERACTIONS.PRIORITY_CHANGE]: (state, action) => {state.priorities = action.payload.priorities}
    }
})
export default filtersSlice