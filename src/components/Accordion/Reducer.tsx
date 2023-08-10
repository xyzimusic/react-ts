import {throws} from 'assert';

export type ActionType = {
    type: string,

}


export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export type  StateType = {
    collapsed:boolean
}
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {...state,collapsed:!state.collapsed}
        default:
            throw new Error('Sorry idk type')
    }

}