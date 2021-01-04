import ITask from "../../types/ITask";
export const ADD_TASK = "ADD_TASK"

export interface AddTaskActionType {
    type: typeof ADD_TASK
    payload: ITask
}