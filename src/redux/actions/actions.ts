import { ADD_TASK, AddTaskActionType } from './actionTypes/actionTypes'
import { FormData } from "../../redux/types/FormData"

let idCounter = 1000;

export function addTask( task:FormData ): AddTaskActionType {
    return { type: ADD_TASK, payload: {...task, id: idCounter++} }
}