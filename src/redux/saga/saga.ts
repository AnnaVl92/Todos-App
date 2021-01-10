import { put, takeEvery } from 'redux-saga/effects'
import { ADD_TASK, ADD_TASK_ASYNC, EDIT_TASK, EDIT_TASK_ASYNC } from "../actions/actionTypes"
import { AddTaskActionType, EditTaskActionType } from "../../types/IActionTypes"

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* addTaskAsync(action: AddTaskActionType) {
    yield delay(1000)
    yield put({ type: ADD_TASK_ASYNC, payload: action.payload })
}

export function* editTaskAsync(action: EditTaskActionType) {
    yield delay(1000)
    yield put({ type: EDIT_TASK_ASYNC, payload: action.payload })
}

export default function* rootSaga() {
    yield takeEvery(ADD_TASK, addTaskAsync)
    yield takeEvery(EDIT_TASK, editTaskAsync)
}