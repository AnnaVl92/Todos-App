import ITask from "./ITask";
import { ADD_TASK, FETCH_TASK_BY_ID, EDIT_TASK } from "../redux/actions/actionTypes"

export interface AddTaskActionType {
    type: typeof ADD_TASK
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