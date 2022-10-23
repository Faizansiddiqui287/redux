import { ADD_ACTION, DELETE_ACTION } from "../actionTypes/todoActionTypes"


interface IState {
    todo: {
        id: number,
        task: string
    }[]
}
interface IAction {
    type: string,
    payload: any
}
const initialState: IState = {
    todo: [{id: 1, task: 'test'}],

}

const todoReducer: any = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ADD_ACTION:
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        case DELETE_ACTION: 
            return {
                ...state,
                todo: state.todo.filter(i => i.id !== action.payload)
            }
        default:
            return state
    }
    
}


export const addAction = (t: string, l: number) => {
    // const d = fetch('url')
    const payload = {
        id: l,
        task: t
    }
    return {type: ADD_ACTION, payload}
}

export const deleteAction = (payload: number) => {

    return {type: DELETE_ACTION, payload}
}

export default todoReducer