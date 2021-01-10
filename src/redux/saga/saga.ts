import { put, takeEvery } from 'redux-saga/effects'
import { ADD_TASK_ASYNC, EDIT_TASK, EDIT_TASK_ASYNC, DELETE_TASK, DELETE_TASK_ASYNC, ADD_TASK } from "../actions/actionTypes"
import { AddTaskActionType, EditTaskActionType, DeleteTaskActionType } from "../../types/IActionTypes"

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

// imitate server call
async function fakeFetch(response: any, ms = 3000) {
    console.log(response);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(response);
        }, ms);
    });
}

export function* addTaskAsync(action: AddTaskActionType) {
    //yield delay(10000)
    const response = yield fakeFetch(action.payload);
    yield put({ type: ADD_TASK_ASYNC, payload: response })
}

export function* editTaskAsync(action: EditTaskActionType) {
    yield delay(1000)
    yield put({ type: EDIT_TASK_ASYNC, payload: action.payload })
}

export function* deleteTaskAsync(action: DeleteTaskActionType) {
    yield delay(1000)
    yield put({ type: DELETE_TASK_ASYNC, payload: action.payload })
}

export default function* rootSaga() {
    yield takeEvery(ADD_TASK, addTaskAsync)
    yield takeEvery(EDIT_TASK, editTaskAsync)
    yield takeEvery(DELETE_TASK, deleteTaskAsync)
}