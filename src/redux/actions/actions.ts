import { ADD_TASK, FETCH_TASK_BY_ID, EDIT_TASK, DELETE_TASK } from './actionTypes'
import ITask, { INewTask } from "../../types/ITask"
import { 
    AddTaskActionType,
    FetchTaskByIdActionType,
    EditTaskActionType,
    DeleteTaskActionType
} from "../../types/IActionTypes"
import { format } from 'date-fns'

export function addTask(task: INewTask): AddTaskActionType {
    return {
        type: ADD_TASK,
        payload: {
            ...task,
            id: (new Date().getTime()),
            creationDate: format(new Date(), "PPp")
        }
    }
}

export function fetchTaskById(taskId: ITask["id"]): FetchTaskByIdActionType {
    return {
        type: FETCH_TASK_BY_ID,
        payload: taskId
    }
}

export function editTask(task: ITask): EditTaskActionType {
    return {
        type: EDIT_TASK,
        payload: { ...task }
    }
}

export function deleteTask(taskID: ITask["id"]): DeleteTaskActionType {
    return {
        type: DELETE_TASK,
        payload: taskID
    }
}