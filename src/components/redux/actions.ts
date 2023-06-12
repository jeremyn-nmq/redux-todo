import {IFilterPayload, ITodo} from "../helper/interfaces";
import {FILTERACTIONS, TODOACTIONS} from "../helper/constants";

export const addTodo = (data:ITodo) => {
    return {type: TODOACTIONS.ADD_TODO, payload: data}
}

export const toggleTodoStatus = (id: string|number) => {
    return {type: TODOACTIONS.TOGGLE_TODO, payload: id}
}

export const searchFilterChange = (searchValue: string) => {
    let payload: IFilterPayload = {search: searchValue}
    return {type: FILTERACTIONS.SEARCH_TODO, payload: payload.search}
}

export const statusFilterChange = (status: string) => {
    let payload: IFilterPayload = {status: status}
    return {type: FILTERACTIONS.STATUS_CHANGE, payload: payload.status}
}

export const priorityFilterChange = (priorities: []) => {
    let payload: IFilterPayload = {priorities: priorities}
    return {type: FILTERACTIONS.PRIORITY_CHANGE, payload}
}