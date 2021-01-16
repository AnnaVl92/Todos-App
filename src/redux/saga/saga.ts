import { put, takeEvery } from 'redux-saga/effects'
import {
	ADD_TASK, ADD_TASK_ASYNC, DELETE_TASK, DELETE_TASK_ASYNC, EDIT_TASK, EDIT_TASK_ASYNC, FETCH_ALL, FETCH_ALL_ASYNC, FETCH_TASK_BY_ID, FETCH_TASK_BY_ID_ASYNC,
} from '../actions/actionTypes'
import {
	AddTaskActionType, DeleteTaskActionType, EditTaskActionType, FetchTaskByIdActionType,
} from '../../types/IActionTypes'
import ITask, { INewTask } from '../../types/ITask'

// imitate server call
async function fakeFetch(response: any, ms = 300) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(response)
		}, ms)
	})
}

const storeKey = 'tasks'
const getPersistedState = () => {
	const persistedState = localStorage.getItem(storeKey)
	return persistedState
		? JSON.parse(persistedState) as ITask[]
		: []
}
const saveState = (tasks: ITask[]): void => {
	localStorage.setItem(storeKey, JSON.stringify(tasks))
}

const addTask = (newTask: INewTask): ITask => {
	const persistedState = getPersistedState()
	const currentId = persistedState.length
		? Math.max(...persistedState.map(task => task.id || 0))
		: 0
	const task = {
		...newTask,
		id: currentId + 1,
		creationDate: Number(new Date()),
	}
	persistedState.push(task)
	saveState(persistedState)
	return task
}

const getTaskById = (taskId: ITask['id']): ITask => {
	const persistedState = getPersistedState()
	const currentTask = persistedState.find(task => task.id === taskId) as ITask
	return currentTask
}

const editTask = (editedTask: ITask): ITask => {
	const persistedState = getPersistedState()
	const updatedState = persistedState.map(task => {
		if (task.id === editedTask.id) {
			task.title = editedTask.title
			task.description = editedTask.description
		}
		return task
	})
	saveState(updatedState)
	return editedTask
}

const deleteTask = (taskId: ITask['id']): ITask | null => {
	const persistedState = getPersistedState()
	const removedTask = persistedState.find(task => task.id === taskId) || null
	const tasks = persistedState.filter(task => task.id !== taskId)
	saveState(tasks)
	return removedTask
}

export function* fetchAllAsync() {
	const state = getPersistedState()
	const response = yield fakeFetch(state)
	yield put({ type: FETCH_ALL_ASYNC, payload: response })
}

export function* addTaskAsync(action: AddTaskActionType) {
	const task = addTask(action.payload)
	// we can also return full list of tasks
	// yield fetchAllAsync();

	const response = yield fakeFetch(task)
	yield put({ type: ADD_TASK_ASYNC, payload: response })
}

export function* editTaskAsync(action: EditTaskActionType) {
	const editedTask = editTask(action.payload)
	// we can also return full list of tasks
	// yield fetchAllAsync();

	const response = yield fakeFetch(editedTask)
	yield put({ type: EDIT_TASK_ASYNC, payload: response })
}

export function* fetchTaskByIdAsync(action: FetchTaskByIdActionType) {
	const task = getTaskById(action.payload)
	const response = yield fakeFetch(task)
	yield put({ type: FETCH_TASK_BY_ID_ASYNC, payload: response })
}

export function* deleteTaskAsync(action: DeleteTaskActionType) {
	const removedTask = deleteTask(action.payload)
	// we can also return full list of tasks
	// yield fetchAllAsync();

	const response = yield fakeFetch(removedTask)
	yield put({ type: DELETE_TASK_ASYNC, payload: response })
}

export default function* rootSaga() {
	yield takeEvery(FETCH_ALL, fetchAllAsync)
	yield takeEvery(FETCH_TASK_BY_ID, fetchTaskByIdAsync)
	yield takeEvery(ADD_TASK, addTaskAsync)
	yield takeEvery(EDIT_TASK, editTaskAsync)
	yield takeEvery(DELETE_TASK, deleteTaskAsync)
}
