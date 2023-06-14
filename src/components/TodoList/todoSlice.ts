// import {TODOACTIONS} from "../helper/constants";
// import {PRIORITY} from "../helper/enums";
// import {ITodo} from "../helper/interfaces";
//
// export const todoListInitialState:Array<ITodo> = [
//     {
//         id:1,
//         name: 'Learn Yoga',
//         completed: false,
//         priority: PRIORITY.Low
//     },
//     {
//         id:2,
//         name: 'Learn React',
//         completed: true,
//         priority: PRIORITY.High
//     },
//     {
//         id:3,
//         name: 'Learn Redux',
//         completed: false,
//         priority: PRIORITY.Medium
//     }
// ]
//
// const todoListReducer = (state=todoListInitialState, action:any) => {
//     switch (action.type) {
//         case TODOACTIONS.ADD_TODO:
//             return [...state, action.payload]
//         case TODOACTIONS.TOGGLE_TODO:
//             return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
//         default:
//             return state
//     }
// }
//
// export default todoListReducer

import {createSlice} from "@reduxjs/toolkit";
import {ITodo} from "../helper/interfaces";
import {PRIORITY} from "../helper/enums";
import {TODOACTIONS} from "../helper/constants";
const { v4: uuidv4 } = require('uuid');

const initialState:Array<ITodo> = [
    {
        id:uuidv4(),
        name: 'Learn Yoga',
        completed: false,
        priority: PRIORITY.Low
    },
    {
        id:uuidv4(),
        name: 'Learn React',
        completed: true,
        priority: PRIORITY.High
    },
    {
        id:uuidv4(),
        name: 'Learn Redux',
        completed: false,
        priority: PRIORITY.Medium
    }
]

const todoSlice: any = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        [TODOACTIONS.ADD_TODO]: (state, action) => state.push(action.payload),
        [TODOACTIONS.TOGGLE_TODO]: (state, action) => {
            const td = state.find(todo => todo.id === action.payload)
            if( td ) td.completed = !td.completed
        }
    }
})

export default todoSlice