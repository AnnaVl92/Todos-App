import { 
    AddTaskActionType,
    FetchTaskByIdActionType,
    EditTaskActionType,
    DeleteTaskActionType 
} from '../../types/IActionTypes'
import IState from '../../types/IState'

const initialState: IState = {
    tasks: []
}

type ActionType = AddTaskActionType | FetchTaskByIdActionType | EditTaskActionType | DeleteTaskActionType;

const rootReducer = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case 'ADD_TASK_ASYNC':
            if (state.tasks) {
                return { tasks: [...state.tasks, action.payload ] }
            } else {
                return { tasks: [ action.payload ] }
            }
        case 'FETCH_TASK_BY_ID':
            if (state.tasks) {
                return { ...state, task: state.tasks.find(task => task.id === action.payload)}
            } else {
                return { ...state }
            }
        case 'EDIT_TASK':
            if (state.tasks) {
                const tasks = state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        task.title = action.payload.title
                        task.description = action.payload.description
                    }
                    return task;
                })
                return { task: {...action.payload}, tasks: [...tasks] }
            } else {
                return { ...state }
            }
        case 'DELETE_TASK':
            if (state.tasks) {
                const tasks = state.tasks.filter(task => task.id !== action.payload)
                return { tasks: [...tasks] }
            } else {
                return { ...state }
            }
        default:
            return state
    }
}

export default rootReducer