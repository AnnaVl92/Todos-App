import { AddTaskActionType } from '../actions/actionTypes/actionTypes'
import IState from '../types/IState'

const initialState: IState = {
    tasks: []
}

const rootReducer = (state = initialState, action: AddTaskActionType ): IState => {
    switch (action.type) {
        case 'ADD_TASK':
            return { tasks: [...state.tasks, action.payload ] }
        default:
            return state
    }
}

export default rootReducer