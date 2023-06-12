import {PRIORITY} from "./enums";

export interface ITodo {
    name: string
    priority: keyof typeof PRIORITY
    completed: boolean
    id: number | string
}

export interface IFilterPayload {
    search?: string,
    status?: string,
    priorities?: Array<keyof typeof PRIORITY>
}

export interface IAction {
    type: string
    payload: ITodo | IFilterPayload
}
