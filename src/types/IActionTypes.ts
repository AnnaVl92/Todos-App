import ITask from "./ITask";
import { ADD_TASK, ADD_TASK_ASYNC, FETCH_TASK_BY_ID, EDIT_TASK, DELETE_TASK } from "../redux/actions/actionTypes"

export interface AddTaskActionType {
    type: typeof ADD_TASK | typeof ADD_TASK_ASYNC
    payload: ITask
}

export interface FetchTaskByIdActionType {
    type: typeof FETCH_TASK_BY_ID
    payload: ITask["id"]
}

export interface EditTaskActionType {
    type: typeof EDIT_TASK
    payload: ITask
}

export interface DeleteTaskActionType {
    type: typeof DELETE_TASK
    payload: ITask["id"]
}