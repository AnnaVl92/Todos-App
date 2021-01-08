import { ADD_TASK } from './actionTypes'
import IFormData from "../../types/IFormData"
import { AddTaskActionType } from "../../types/IActionTypes"
import { format } from 'date-fns'

export function addTask( task:IFormData ): AddTaskActionType {
    return { 
        type: ADD_TASK,
        payload: {
            ...task,
            id: (new Date().getTime()),
            date: format(new Date(), "PPp")
        } 
    }
}