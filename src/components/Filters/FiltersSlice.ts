import {FILTERACTIONS} from "../helper/constants";
import {IFilterPayload} from "../helper/interfaces";
import {STATUS} from "../helper/enums";

export const filterInitialState: IFilterPayload = {
    search:'',
    status: STATUS.ALL,
    priorities: []
}

const filtersReducer = (state=filterInitialState, action:any) => {
    switch (action.type) {
        case FILTERACTIONS.SEARCH_TODO:
            return {
                ...state,
                search: action.payload
            }
        case FILTERACTIONS.STATUS_CHANGE: {
            return {
                ...state,
                status: action.payload
            }
        }
        case FILTERACTIONS.PRIORITY_CHANGE: {
            return {
                ...state,
                priorities: action.payload.priorities
            }
        }
        default:
            return state
    }
}

export default filtersReducer