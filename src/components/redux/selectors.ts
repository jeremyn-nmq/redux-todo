import {ITodo} from "../helper/interfaces";
import {createSelector} from "reselect";
import {STATUS} from "../helper/enums";

export const searchTextSelector = (state:any) => state.filters.search
export const statusValueSelector = (state:any) => state.filters.status
export const priorityValueSelector = (state:any) => state.filters.priorities
export const todoListSelector = (state:any) => state.todoList

export const todosRemainingSelector = createSelector(
    todoListSelector,
    statusValueSelector,
    searchTextSelector,
    priorityValueSelector,
    (todoList, status, searchText, priorities) => {
    return todoList.filter((todo:ITodo) => {
        let searched = todo.name.toLowerCase().includes(searchText.toLowerCase())
        let prioritised = priorities.length ? priorities.includes(todo.priority) : true
        if (status === STATUS.ALL){
            return searched && prioritised
        }
        return searched && (status === STATUS.COMPLETE ? todo.completed : !todo.completed) && prioritised
    })
})

// export const todoListSelector = (state:any) => {
//     const searchText = searchTextSelector(state)
//     return state.todoList.filter((todo:ITodoPayLoad) => {
//         return todo.name.includes(searchText)
//     })
// }
