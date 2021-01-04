import { ADD_TASK, AddTaskActionType } from './actionTypes/actionTypes'
import IFormData from "../types/IFormData"
import { format } from 'date-fns'

let idCounter = 1000;

export function addTask( task:IFormData ): AddTaskActionType {
    return { 
        type: ADD_TASK,
        payload: {
            ...task,
            id: idCounter++,
            date: format(new Date(), "PPp")
        } 
    }
}