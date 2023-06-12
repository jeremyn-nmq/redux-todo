import {TODOACTIONS} from "../helper/constants";
import {PRIORITY} from "../helper/enums";
import {ITodo} from "../helper/interfaces";

export const todoListInitialState:Array<ITodo> = [
    {
        id:1,
        name: 'Learn Yoga',
        completed: false,
        priority: PRIORITY.Low
    },
    {
        id:2,
        name: 'Learn React',
        completed: true,
        priority: PRIORITY.High
    },
    {
        id:3,
        name: 'Learn Redux',
        completed: false,
        priority: PRIORITY.Medium
    }
]

const todoListReducer = (state=todoListInitialState, action:any) => {
    switch (action.type) {
        case TODOACTIONS.ADD_TODO:
            return [...state, action.payload]
        case TODOACTIONS.TOGGLE_TODO:
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
}

export default todoListReducer