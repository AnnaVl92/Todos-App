import ITask from "./ITask";
import { ADD_TASK } from "../redux/actions/actionTypes"

export interface AddTaskActionType {
    type: typeof ADD_TASK
    payload: ITask
}