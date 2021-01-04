import { createStore } from "redux";
import rootReducer from "../reducers/reducers"
import IState from '../types/IState'

const defaultState: IState = { tasks:[] };
const persistedState = localStorage.getItem('tasks');
const currentState =  persistedState 
    ? JSON.parse(persistedState) as IState
    : defaultState;

const store = createStore(
        rootReducer,
        currentState,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ 
        && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )

store.subscribe(() => localStorage.setItem('tasks', JSON.stringify(store.getState())))

export default store