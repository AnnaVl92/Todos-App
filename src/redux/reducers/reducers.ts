import {
    FetchTaskByIdAsyncActionType,
    FetchTaskByIdActionType,
    EditTaskActionType,
    DeleteTaskAsyncActionType,
    FetchAllActionType,
    AddTaskAsyncActionType
} from '../../types/IActionTypes'
import IState from '../../types/IState'

const initialState: IState = {
    tasks: []
}

type ActionType = FetchAllActionType | AddTaskAsyncActionType | FetchTaskByIdAsyncActionType | FetchTaskByIdActionType | EditTaskActionType | DeleteTaskAsyncActionType;

const rootReducer = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case 'FETCH_ALL_ASYNC':
            if (action.payload) {
                return { tasks: action.payload }
            } else {
                return { tasks: [] }
            }
        case 'ADD_TASK_ASYNC':
            if (state.tasks) {
                return { tasks: [...state.tasks, action.payload] }
            } else {
                return { tasks: [action.payload] }
            }
        case 'FETCH_TASK_BY_ID':
            return { tasks: state.tasks } // clear task
        case 'FETCH_TASK_BY_ID_ASYNC':
            if (state.tasks) {
                return { ...state, task: action.payload }
            } else {
                return { ...state }
            }
        case 'EDIT_TASK_ASYNC':
            if (state.tasks) {
                const tasks = state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        task.title = action.payload.title
                        task.description = action.payload.description
                    }
                    return task;
                })
                return { tasks: [...tasks] }
            } else {
                return { ...state }
            }
        case 'DELETE_TASK_ASYNC':
            if (state.tasks) {
                const tasks = state.tasks.filter(task => task.id !== action.payload.id)
                return { tasks: [...tasks] }
            } else {
                return { ...state }
            }
        default:
            return state
    }
}

export default rootReducer