import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "../reducers/reducers"
import IState from '../../types/IState'
import rootSaga from "../saga/saga"

const middleware = createSagaMiddleware();

const defaultState: IState = { tasks:[] };
const persistedState = localStorage.getItem('tasks');
const currentState =  persistedState 
    ? JSON.parse(persistedState) as IState
    : defaultState;

const store = createStore(
        rootReducer,
        currentState,
        compose(
            applyMiddleware(middleware),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ 
            && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
    )

store.subscribe(() => localStorage.setItem('tasks', JSON.stringify(store.getState())))

middleware.run(rootSaga);

export default store