import {UserType} from '../HW8'
import {type} from "os";

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType, action: any): ActionType => { // need to fix any
    switch (action.type) {

        case 'sort': {

            // by name

            return {
                ...state, name: action.name
            }  // need to fix
        }
        case 'check': {

            return {...state, age: action.age} // need to fix

        }
        default:
            return state
    }
}
