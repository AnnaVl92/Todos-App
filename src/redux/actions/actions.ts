import {
	ADD_TASK, DELETE_TASK, EDIT_TASK, FETCH_ALL, FETCH_TASK_BY_ID,
} from './actionTypes'
import ITask, { INewTask } from '../../types/ITask'
import {
	AddTaskActionType,
	DeleteTaskActionType,
	EditTaskActionType,
	FetchAllActionType,
	FetchTaskByIdActionType,
} from '../../types/IActionTypes'

export function fetchAll(): FetchAllActionType {
	return {
		type: FETCH_ALL,
	}
}

export function addTask(task: INewTask): AddTaskActionType {
	return {
		type: ADD_TASK,
		payload: task,
	}
}

export function fetchTaskById(taskId: ITask['id']): FetchTaskByIdActionType {
	return {
		type: FETCH_TASK_BY_ID,
		payload: taskId,
	}
}

export function editTask(task: ITask): EditTaskActionType {
	return {
		type: EDIT_TASK,
		payload: { ...task },
	}
}

export function deleteTask(taskID: ITask['id']): DeleteTaskActionType {
	return {
		type: DELETE_TASK,
		payload: taskID,
	}
}
