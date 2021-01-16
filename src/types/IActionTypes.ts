import ITask, { INewTask } from './ITask'
import {
	ADD_TASK, ADD_TASK_ASYNC, DELETE_TASK, DELETE_TASK_ASYNC, EDIT_TASK, EDIT_TASK_ASYNC, FETCH_ALL, FETCH_ALL_ASYNC, FETCH_TASK_BY_ID, FETCH_TASK_BY_ID_ASYNC,
} from '../redux/actions/actionTypes'

export interface FetchAllActionType {
	type: typeof FETCH_ALL | typeof FETCH_ALL_ASYNC
	payload?: ITask[]
}

export interface AddTaskActionType {
	type: typeof ADD_TASK
	payload: INewTask
}

export interface AddTaskAsyncActionType {
	type: typeof ADD_TASK_ASYNC
	payload: ITask
}

export interface FetchTaskByIdActionType {
	type: typeof FETCH_TASK_BY_ID
	payload: ITask['id']
}

export interface FetchTaskByIdAsyncActionType {
	type: typeof FETCH_TASK_BY_ID_ASYNC
	payload: ITask
}

export interface EditTaskActionType {
	type: typeof EDIT_TASK | typeof EDIT_TASK_ASYNC
	payload: ITask
}

export interface DeleteTaskActionType {
	type: typeof DELETE_TASK
	payload: ITask['id']
}

export interface DeleteTaskAsyncActionType {
	type: typeof DELETE_TASK_ASYNC
	payload: ITask
}
